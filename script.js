
window.onload = function(){
    // let rangeInput = document.getElementById('rating')
    // button.addEventListener('onchange', show_value);

    const selectElement = document.getElementById('rating');

    selectElement.addEventListener('change', (event) => {
        show_value(selectElement.value);
    });

    function show_value(x)
    {
    document.getElementById("slider_value").innerHTML=x;
    }

    let button = document.getElementById('fillForm')
    button.addEventListener('click', searchQuestion);

    function searchQuestion(){
        document.getElementById('loaderHere').style.display='block';
        fetch("https://codeforces.com/api/problemset.problems")
        .then(data => data.json())
        .then(question => {
            const questionList = question;
            const baseURL = "https://codeforces.com/problemset/problem/";
            var rating = document.getElementById("rating").value;
            var tag1 = document.getElementById("tag1").checked?"binary search": null;
            var tag2 = document.getElementById("tag2").checked?"brute force": null;
            var tag3 = document.getElementById("tag3").checked?"greedy": null;
            var tag4 = document.getElementById("tag4").checked?"dp": null;
            var tag5 = document.getElementById("tag5").checked?"graphs": null;
            var tag6 = document.getElementById("tag6").checked?"sorting": null;
            var tag7 = document.getElementById("tag7").checked?"dfs and similar": null;
            var tag8 = document.getElementById("tag8").checked?"trees": null;
            var tag9 = document.getElementById("tag9").checked?"two pointers": null;
            var tag10 = document.getElementById("tag10").checked?"shortest paths": null;
            var tag11 = document.getElementById("tag11").checked?"hashing": null;
            var tag12 = document.getElementById("tag12").checked?"implementation": null;




            var listQuestions = questionList["result"]["problems"];
            var questionArray = new Array();
            for (var i=0; i<listQuestions.length; i = i+1){
                var question = listQuestions[i];
                for (var j =0;j<question['tags'].length;j=j+1){
                    if(question['rating']<=rating){
                        if(tag1 == question['tags'][j] || tag2 == question['tags'][j] || tag3 == question['tags'][j] || tag4 == question['tags'][j] || tag5 == question['tags'][j] || tag6 == question['tags'][j] || tag7 == question['tags'][j] || tag8 == question['tags'][j] || tag9 == question['tags'][j] || tag10 == question['tags'][j] || tag11 == question['tags'][j] || tag12 == question['tags'][j]){
                            questionArray.push(question);
                            console.log(question['rating']);
                        }
                        
                    }
                }
            }
            if(questionArray.length==0){

                var questionIndex = Math.floor((Math.random() * listQuestions.length) + 1);
                var questionName = questionList["result"]["problems"][questionIndex]['name'];
                var contestId = (questionList["result"]["problems"][questionIndex]['contestId']);
                var index = questionList["result"]["problems"][questionIndex]['index'];
                const solvedCount = questionList["result"]["problemStatistics"][questionIndex]["solvedCount"];
                document.getElementById('questionHere').style.display = 'block';
                document.getElementById('para1').style.display = 'block';
                document.getElementById('startTime1').style.display = 'block';
                var url1=document.querySelector(".temp1");
                url1.getAttribute("href");
                url1.setAttribute("href",baseURL + contestId + '/' + index);
                url1.textContent = questionName;
                document.getElementById("startTime1").innerHTML = "Solved By : " + solvedCount.toString();
                document.getElementById('loaderHere').style.display='none';

            }
            else{
                var questionIndexHere = Math.floor((Math.random() * questionArray.length) + 1);

        
                var questionName = questionArray[questionIndexHere]['name'];
                var contestId = (questionArray[questionIndexHere]['contestId']);
                var index = questionArray[questionIndexHere]['index'];
                const solvedCount = questionList["result"]["problemStatistics"][questionIndexHere]["solvedCount"];
                document.getElementById('questionHere').style.display = 'block';
                document.getElementById('para1').style.display = 'block';
                document.getElementById('startTime1').style.display = 'block';
                var url1=document.querySelector(".temp1");
                url1.getAttribute("href");
                url1.setAttribute("href",baseURL + contestId + '/' + index);
                url1.textContent = questionName;
                document.getElementById("startTime1").innerHTML = "Solved By : " + solvedCount.toString();
                document.getElementById('loaderHere').style.display='none';

            }
            // var questionIndexHere = Math.floor((Math.random() * questionArray.length) + 1);
            // document.getElementById('questionHere').style.display = 'block';
            // document.getElementById('para1').style.display = 'block';
            // document.getElementById('startTime1').style.display = 'block';

            // var questionName = questionArray[questionIndexHere]['name'];
            // var contestId = (questionArray[questionIndexHere]['contestId']);
            // var index = questionArray[questionIndexHere]['index'];
            // const solvedCount = questionList["result"]["problemStatistics"][questionIndexHere]["solvedCount"];

            // var questionIndex = 90;
            // var questionName = questionList["result"]["problems"][questionIndex]['name'];
            // var contestId = (questionList["result"]["problems"][questionIndex]['contestId']);
            // var index = questionList["result"]["problems"][questionIndex]['index'];
            // const solvedCount = questionList["result"]["problemStatistics"][questionIndex]["solvedCount"];

            // var url1=document.querySelector(".temp1");
            // url1.getAttribute("href");
            // url1.setAttribute("href",baseURL + contestId + '/' + index);
            // url1.textContent = questionName;
            // document.getElementById("startTime1").innerHTML = "Solved By : " + solvedCount.toString();
            // console.log(solvedCount);
            // console.log(questionList["result"]["problems"][0]);

        })
    }
}