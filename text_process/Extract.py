import re

patDelComment0 = r'//.*\n'
patDelComment1 = r'/\*.*\*/'
patDelNewLine = r'\n'
patEnum = r'enum(.*?){(.*?)}(.*?);'

fin = open('in.txt', 'r')
original = fin.read()
fin.close()

tmp0 = re.sub(patDelComment0, '', original)
tmp1 = re.sub(patDelNewLine, '', tmp0)
tmp2 = re.sub(patDelComment1, '', tmp1)

fout = open('out.txt', 'w')
result = re.findall(patEnum, tmp2)
cnt = 0;


for item in result:
    (enumName, enumVal, typeName) = item
    if enumName.strip():
        name = enumName.strip()
    elif typeName.strip():
        name = typeName.strip()
    else:
        name = 'Array'+str(cnt)
        cnt += 1
    fout.write('const char* ZT'+name.strip()+'[] = {\n')
    enumValList = enumVal.split(',')
    firstItem = True;
    for enumitem in enumValList:
        if not firstItem:
            fout.write(',\n')
        else:
            firstItem = False
        fout.write('    "')
        if '=' in enumitem:
            fout.write(enumitem[0:enumitem.find('=')].strip())
        else:
            fout.write(enumitem.strip())
        fout.write('"')
    fout.write('\n};\n')
fout.close()
