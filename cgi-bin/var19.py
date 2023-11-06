#!H:/Programms/Visual Studio 2022/VS2022ComponentsToolsSDK/Python39_64/python.exe
#вывод в таблицу

import cgi, sys
sys.stdout.reconfigure(encoding='utf-8')
form = cgi.FieldStorage()         # извлечь данные из формы
print("Content-Type: text/html;charset=UTF-8")  # плюс пустая строка
print();
# print(form);
html = """
<H1>Анкета пользователя</H1> <HR>
<dl id=responseList>
    <dt>Вас зовут:</dt>
    <dd>%(surname)s %(name)s %(patronymic)s</dd>
    <dt>Пароль:</dt>
    <dd>%(password)s</dd>
    <dt>Опыт разработки:</dt>
    <dd>%(experience)s</dd>
    <dt>Ваша работа:</dt>
    <dd>%(job)s</dd>
    <dt>Любимый язык:</dt>
    <dd>%(language)s</dd>
    <dt>Комментарии:</dt>
    <dd>%(comment)s</dd>
</dl>
"""
text = """
%(surname)s
%(name)s
%(patronymic)s
%(password)s
%(experience)s
%(job)s
%(language)s
%(comment)s
---------------------

"""
data = {}
for field in ('surname', 'name', 'patronymic', 'password', 'experience', 'job', 'language', 'comment'):
    if not field in form:
        data[field] = '(unknown)'
    else:
        if not isinstance(form[field], list):
            data[field] = form[field].value
        else:
            values = [x.value for x in form[field]]
            data[field] = ' and '.join(values)
            
f = open("userData.txt", "a+", encoding="utf-8")
f.writelines(text%data);
f.close()
print(html % data)



# <H4>Вас зовут: %(surname)s %(name)s %(patronymic)s</H4>
# <H4>Пароль: %(password)s</H4>
# <H4>Опыт разработки: %(experience)s</H4>
# <H4>Ваша работа: %(job)s</H4>
# <H4>Любимый язык: %(language)s</H4>
# <H4>Комментарии:</H4>
# <P>%(comment)s</P>
# <HR>


# import cgi, sys
# form = cgi.FieldStorage()         # извлечь данные из формы
# print("Content­type: text/html")  # плюс пустая строка
# print() 
# # print("<section id='result'>Hello Wolrd!</section>")
# html = """<section id='result'
# <H1>Anketa</H1>    <HR>
# <H4>Ку ку: %(name)s</H4>
# <H4>Размер обуви: %(shoesize)s</H4>
# <H4>Ваша работа: %(job)s</H4>
# <H4>Любимый язык: %(language)s</H4>
# <H4>Комментарии:</H4>
# <P>%(comment)s</P>
# <HR>
# </section>"""
# data = {}
# for field in ('name', 'shoesize', 'job', 'language', 'comment'):
#     if not field in form:
#         data[field] = '(unknown)'
#     else:
#         if not isinstance(form[field], list):
#             data[field] = form[field].value
#         else:
#             values = [x.value for x in form[field]]
#             data[field] = ' and '.join(values)
            
# print(html % data)

