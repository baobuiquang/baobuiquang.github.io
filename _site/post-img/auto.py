import os

os.chdir('D:\[Github]\\buiquangbao.github.io\post-img\lifelog')

print('')

for f in os.listdir():
    if f != 'Export':
        file_name, file_ext = os.path.splitext(f)
        year, month, day, caption = file_name.split('-')

        new_file_name = '{}-{}-{}-{}.md'.format(
            year, month, day, caption)

        with open('Export\\' + new_file_name, 'w', encoding="utf-8") as fp:
            pass
            content = '---\n'
            content += 'layout: post\n'
            content += 'title: ""\n'
            content += 'date: {}-{}-{} 20:00:00 +0700\n'.format(
                year, month, day)
            content += 'series: lifelog\n'
            content += 'photo: {}\n'.format(file_name + file_ext)
            content += '---'
            fp.write(content)

        print('>> ' + new_file_name)


print('')
