module.exports = {
    // Database name
    // database_name: "<INSERT_PG_DATABASE_NAME>",
    database_name: "SQLSyncDemo",

    // Realm Object Server Information
    
    //examples:
    //self-hosted: realm://10.0.0.7:9080/
    //cloud: realms://small-plastic-handle.us1a.cloud.realm.io/
    //realm_object_server_url: "realm://<IP_OR_DNS_OF_ROS>",
    realm_object_server_url: "realm://testcloudsync040219.us1a.cloud.realm.io",

    
    
    //self-hosted: http://10.0.0.7:9080
    //cloud: https://small-plastic-hatestcloudsync040219.us1a.cloud.realm.iondle.us1a.cloud.realm.io/
    auth_server_url: "http://testcloudsync040219.us1a.cloud.realm.io",
    
    admin_username: "di",

    admin_password: "di142",

    // The synced Realm path for the data ie. 'postgresRealm'
    // Note: be careful not to start this path with a `/` if you have a trailing slash in your realm_object_server_url above 
    target_realm_path: '<http://testcloudsync040219.us1a.cloud.realm.io>',

    // Postgres config used for all connections - replace with your data
    postgres_config: {
        //host:     '<POSTGRES_SERVER_IP>',
        host:     'mssql3.1gb.ua',        
        //port:     5432,
        port:     1344,
        //user:     '<POSTGRES_USER>',
        user:     '1gb_exz',
        //password: '<POSTGRES_PASSWORD>'
        password: 'fec4e4d8223'
    },
}
