# Seowon Mobile

Todo List
- `/mobile` 폴더 사용 설정
- [material-ui](http://www.material-ui.com/) 적용
- [Chart.js](http://www.chartjs.org/) 적용
- [Travis CI](https://travis-ci.org/getting_started) 적용

## Build

```
yarn build
```
or
```
npm run build
```

## Apply

### Upload

1. `/build` 폴더를 디바이스의 `/home/www/mobile `에 넣는다.(local webserver wget이용)
  - Windows : [HFS](http://www.rejetto.com/hfs/)
  - Mac : `python -m SimpleHTTPServer 8000`

혹은

2. Full Build `/build` 폴더를 `www/mobile`로 이동


## Webserver Setting

>설정파일 : `/etc/sysconfig/lighttpd/lighttpd.conf`

### lighttpd svg사용 설정

참고 : [Lighttpd redmine issue #2579](https://redmine.lighttpd.net/issues/2579)

`/etc/sysconfig/lighttpd/lighttpd.conf`

```
mimetype.assign = (
        ".html" => "text/html",
        ".txt" => "text/plain",
        ".jpg" => "image/jpeg",
        ".gif" => "image/gif", 
        ".png" => "image/png",    
        ".js" => "text/javascript",
        ".css" => "text/css",      
        ".svg" => "image/svg+xml",
        ".svgz" => "image/svg+xml",
) 
```
