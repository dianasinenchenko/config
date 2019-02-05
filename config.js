module.exports = {
    // Database name
    // database_name: "<INSERT_PG_DATABASE_NAME>",
    database_name: "SQLSyncDemo",database_schema: 'dbo',
    
    database_schema: 'dbo',

    // Realm Object Server Information
    
    //examples:
    //self-hosted: realm://10.0.0.7:9080/
    //cloud: realms://small-plastic-handle.us1a.cloud.realm.io/
    //realm_object_server_url: "realm://<IP_OR_DNS_OF_ROS>",
    realm_object_server_url: "realm://testcloudsync040219.us1a.cloud.realm.io",

    
    
    //self-hosted: http://10.0.0.7:9080
    //cloud: https://small-plastic-hatestcloudsync040219.us1a.cloud.realm.iondle.us1a.cloud.realm.io/
    auth_server_url: "http://testcloudsync040219.us1a.cloud.realm.io",
    
     //enter as necessary
    admin_username: 'realm-admin',
    admin_password: '',
    
    //admin_username: "di",
    //admin_password: "di142",

    // The synced Realm path for the data ie. 'postgresRealm'
    // Note: be careful not to start this path with a `/` if you have a trailing slash in your realm_object_server_url above 
    //hz
    target_realm_path: 'http://testcloudsync040219.us1a.cloud.realm.io',

    // Postgres config used for all connections - replace with your data
    sqlserver_config:  {
        user:       'temp',
        password:   'temp1234',
        server:     '176.58.61.47',
        port:        1433,
        connectionTimeout: 300000,
        requestTimeout:    300000,
        pool: {
           idleTimeoutMillis: 300000
       },
      options: {
          //only if needed for server 
          encrypt: true
      }    
  },
}
