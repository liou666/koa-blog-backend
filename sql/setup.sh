#!/bin/bash
set -e

#查看mysql服务的状态，方便调试，
echo `service mysql status`

echo '1.启动mysql...'
#启动mysql
service mysql start
sleep 3

echo `service mysql status`
echo '2.创建数据库...'
mysql < /sql/create_db.sql
sleep 3
echo '2.创建数据库完毕...'


echo '3.开始导入数据...'
mysql < /sql/initial_data.sql
echo '3.导入数据完毕...'

echo '4.修改mysql权限...'
mysql < /sql/privileges.sql
sleep 3
echo '4.权限修改完毕...'

#sleep 3
echo `service mysql status`
echo 'mysql容器启动完毕,且数据导入成功'

#让容器一直处于runing状态,避免容器启动后就退出
tail -f /dev/null
