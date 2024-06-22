FROM mysql:latest

COPY ./config/my.cnf /etc/mysql/conf.d/my.cnf

CMD ["mysqld", "--init-file=/etc/mysql/init.sql"]
