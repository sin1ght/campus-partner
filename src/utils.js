export default {
    install:function(Vue, options){
        Vue.prototype.getFormatTimeNow=function(){
            let date=new Date();
            let hour=date.getHours();
            let minute=date.getMinutes();
            let month=date.getMonth()+1;
            let day=date.getDate()<10?'0'+date.getDate():date.getDate();
        
            if(month<10)
                month='0'+month;
        
            if(hour<10)
                hour='0'+hour;
        
            if(minute<10)
                minute='0'+minute;
        
            return date.getFullYear()+'/'+month+'/'+day+' '+hour+':'+minute;
        }
    }
}