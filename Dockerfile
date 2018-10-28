FROM node:10.11

 ADD . /src
 RUN cd /src;npm i yarn -g;yarn

 EXPOSE 3000;//容器对外暴露的端口号;

CMD ["yarn","start"]
