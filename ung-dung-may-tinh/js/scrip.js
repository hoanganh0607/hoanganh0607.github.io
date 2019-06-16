
           //code số
           $('button.number').on('click', function() {
            let number = $(this).html();
            let screen = $('#screen').val();
            $('#screen').val(screen + number);
       })
       //code phép tính
       $('button.click').on('click', function(){
           let click = $(this).html();
           let screen = $('#screen').val();
           $('#screen').val(screen + click);                 
       })
       //code phép tính mũ 2
       $('button.hat').on('click', function(){
           $hat = $('#screen').val();
           $hat1 = $hat.slice(0, -1)
           $hat2 = $hat.slice(-1)
           $('#screen').val($hat1 + $hat2 + '*' + $hat2);               
       })
       //code phép tính log
       $('button.log').on('click', function(){
           $log = $('#screen').val();
           $log1 = $log.slice(0, -1);
           $log2 = $log.slice(-1);             
           $log3 = Math.log($log2);
           $('#screen').val($log1 + $log3)               
       })
       //Code tính hàm sin
       $('button.sin').on('click', function(){
           $sin = $('#screen').val();
           $sin1 = $sin.slice(0, -1);
           $sin2 = $sin.slice(-1);             
           $sin3 = Math.sin($sin2);
           $('#screen').val($sin1 + $sin3)              
       })
       //code tính hàm cos
       $('button.cos').on('click', function(){
           $cos = $('#screen').val();
           $cos1 = $cos.slice(0, -1);
           $cos2 = $cos.slice(-1);             
           $cos3 = Math.cos($cos2);
           $('#screen').val($cos1 + $cos3)              
       })
       //code tính hàm tan
       $('button.tan').on('click', function(){
           $tan = $('#screen').val();
           $tan1 = $tan.slice(0, -1);
           $tan2 = $tan.slice(-1);             
           $tan3 = Math.tan($tan2);
           $('#screen').val($tan1 + $tan3)
           
       })         
       //code phép tính căn bậc 2
       $('button.square-root').on('click', function(){               
           $squareroot = $('#screen').val();
           $squareroot1 = $squareroot.slice(0, -1)
           $squareroot2 = $squareroot.slice(-1)              
           $canbac2 = Math.sqrt($squareroot2);
           $('#screen').val($squareroot1 + $canbac2);
       })              
       //code nút Del
       $('button.delete').on('click', function(){
           $screen = $('#screen').val();
           $delete = $screen.slice(0, -1);
           $('#screen').val($delete);
       })
       //code nút AC
       $('button.remove').on('click', function(){
           $screen = $('#screen').val();
           $remove = $screen.substring(-1, 0);
           $('#screen').val($remove);
           $('#result').val($remove);
       })
       //code dấu bằng         
       $('button.equal').on('click', function(){
           let equal = $('#screen').val();
           $('#result').val(eval(equal));
       })
       //code đổi màu
       function theme(){
        $('body').css('background-color', '#FF9999')
        $('#wrap').css('background-color', '#FFCCCC')
        $('#wrap').css('border-radius', '20px')
        $('.nut button').css('border-radius', '10px')
        $('.nut button').css('color', '#FF3366')
        $('h1').css('color', '#FF3399')
        $('#screen , #result').css('color', '#FF3399')
       }          
  