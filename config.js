module.exports = {
    // Database name
    database_name: "<INSERT_PG_DATABASE_NAME>",

    // Realm Object Server Information
    
    //examples:
    //self-hosted: realm://10.0.0.7:9080/
    //cloud: realms://small-plastic-handle.us1a.cloud.realm.io/
    realm_object_server_url: "realm://<IP_OR_DNS_OF_ROS>",
    
    //self-hosted: http://10.0.0.7:9080
    //cloud: https://small-plastic-handle.us1a.cloud.realm.io/
    auth_server_url: "http://<IP_OR_DNS_OF_ROS>",
    
    admin_username: "<ADMIN_USER>",

    admin_password: "<ADMIN_USER_PASSWORD>",

    // The synced Realm path for the data ie. 'postgresRealm'
    // Note: be careful not to start this path with a `/` if you have a trailing slash in your realm_object_server_url above 
    target_realm_path: '<URI_OF_REALM>',

    // Postgres config used for all connections - replace with your data
    postgres_config: {
        host:     '<POSTGRES_SERVER_IP>',
        port:     5432,
        user:     '<POSTGRES_USER>',
        password: '<POSTGRES_PASSWORD>'
    },
}
