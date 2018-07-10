//Массив вопросов и ответа
    var data_array = [
      ["The book of Jack London?","Uliss","The Old Man and the Sea","Martin Eden","The Hitchhiker’s Guide to the Galaxy",3],
      ["Who is the creator of the story 'The Lord of the Rings'?","Joanne Rowling","J.R.R.Tolkien","G.R.R.Martin","Terry Pratchett",2],
      ["Who quotes: 'A fool thinks himself to be wise, but a wise man knows himself to be a fool.'?","William Shakespeare","Sun Tzu","Niccolò Machiavelli","Jason Statham",1],
      ["The most expensive book in the world?","Ornithological Biography","The Canterbury Tales","Codex Leicester","The first book of Urizen",3],
      ["The most popular book in the world?","Quotations from Chairman Mao Tse-Tung","Bible","Koran","The Lord of the Rings",3],
      ["Author of the novel 'War and Peace'","L.Tolstoy","Fyodor Dostoevsky","Nikolai Gogol","Anton Chekhov",1],
    ];

    var plus = 0;
    var time = 0;
    var cur_answer = 0;
    var count_answer = data_array.length;

    function sec() {
        time++;
        document.getElementById('time').innerHTML='Spent time: ' + time + ' sec';
    }

    function check(num){

        if(num == 0){

            document.getElementById('option1').style.display='block';
            document.getElementById('option2').style.display='block';
            document.getElementById('option3').style.display='block';
            document.getElementById('option4').style.display='block';
            document.getElementById('question').style.display='block';

            document.getElementById('option1').innerHTML=data_array[cur_answer][1];
            document.getElementById('option2').innerHTML=data_array[cur_answer][2];
            document.getElementById('option3').innerHTML=data_array[cur_answer][3];
            document.getElementById('option4').innerHTML=data_array[cur_answer][4];
            document.getElementById('question').innerHTML=data_array[cur_answer][0];

            document.getElementById('start').style.display='none';
            document.getElementById('end').style.display='inline';

            var intervalID = setInterval(sec, 1000);

        }else{

            if( num ==  data_array[cur_answer][5]){
                plus++;
                document.getElementById('result').innerHTML='Right!';
            }else{
                document.getElementById('result').innerHTML="Wrong! Correct answer: " + data_array[cur_answer][data_array[cur_answer][5]];
            }

            cur_answer++;
            if(cur_answer < count_answer){

                document.getElementById('option1').innerHTML=data_array[cur_answer][1];
                document.getElementById('option2').innerHTML=data_array[cur_answer][2];
                document.getElementById('option3').innerHTML=data_array[cur_answer][3];
                document.getElementById('option4').innerHTML=data_array[cur_answer][4];
                document.getElementById('question').innerHTML=data_array[cur_answer][0];

            }else{

                document.getElementById('time').id = 'stop';
                document.getElementById('option1').style.display='none';
                document.getElementById('option2').style.display='none';
                document.getElementById('option3').style.display='none';
                document.getElementById('option4').style.display='none';
                document.getElementById('question').style.display='none';
                document.getElementById('end').style.display='inline';

                var percent =  Math.round(plus/count_answer*100);
                var res = 'Bad!';
                if(percent>70) res = 'Good!';
                if(percent==100) res = 'Excellent!';

                document.getElementById('result').innerHTML='Correct answers: ' + plus + ' of ' + count_answer + ' (' + percent + '%)<br>' + res;
            }
        }
    }
