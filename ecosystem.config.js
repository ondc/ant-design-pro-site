module.exports = {
  apps: [
    {
      name: 'zuk-doc',
      script: 'npm',
      args: 'run start',
      cwd: './',
      watch: [
        'src',
        'public'
      ],
      error_file: './logs/app-err.log',
      out_file: './logs/app-out.log',  
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '8001'
      },
      env_testing: {
        NODE_ENV: 'testing',
        PORT: '8001'
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: '8001'
      }
    }
  ]
};
