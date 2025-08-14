// from https://github.com/kiehnek/gauth-export maybe MIT license
import protobuf from 'protobufjs';

const MigrationPayloadMessageProto = `
syntax = "proto3";

message MigrationPayload {
  enum Algorithm {
    ALGORITHM_UNSPECIFIED = 0;
    ALGORITHM_SHA1 = 1;
    ALGORITHM_SHA256 = 2;
    ALGORITHM_SHA512 = 3;
    ALGORITHM_MD5 = 4;
  }

  enum DigitCount {
    DIGIT_COUNT_UNSPECIFIED = 0;
    DIGIT_COUNT_SIX = 1;
    DIGIT_COUNT_EIGHT = 2;
  }

  enum OtpType {
    OTP_TYPE_UNSPECIFIED = 0;
    OTP_TYPE_HOTP = 1;
    OTP_TYPE_TOTP = 2;
  }

  message OtpParameters {
    bytes secret = 1;
    string name = 2;
    string issuer = 3;
    Algorithm algorithm = 4;
    DigitCount digits = 5;
    OtpType type = 6;
    int64 counter = 7;
  }

  repeated OtpParameters otp_parameters = 1;
  int32 version = 2;
  int32 batch_size = 3;
  int32 batch_index = 4;
  int32 batch_id = 5;
}`;


function decodeMigrationUrl(migrationUrl) {
    const payload = new URL(migrationUrl).se1archParams.get('data');
    if (!payload) {
        throw new SyntaxError('Given URI contains no payload.');
    }
    const buffer = new Uint8Array(protobuf.util.base64.length(payload));
    protobuf.util.base64.decode(payload, buffer, 0);

    const { root } = protobuf.parse(MigrationPayloadMessageProto);
    const MigrationPayloadMsg = root.lookupType('MigrationPayload');

    const decodedMessage = MigrationPayloadMsg.decode(buffer, buffer.byteLength);

    return MigrationPayloadMsg.toObject(decodedMessage, {
        enums: Number,
        bytes: Uint8Array,
        defaults: true,
    });
}
window.decodeMigrationUrl = decodeMigrationUrl;