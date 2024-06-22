-- init-slave.sql
CHANGE MASTER TO
    MASTER_HOST='mysql-master',
    MASTER_USER='replicator',
    MASTER_PASSWORD='password_replikasi',
    MASTER_AUTO_POSITION=1;

START SLAVE;
