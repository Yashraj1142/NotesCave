let availableKeywords = [
    'JAVA',
    'Python',
    'COA',
    'Computer',
    'Organization',
];

const resultBox = document.getElementById("result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        display(result)

        if(!result.length){
            result.innerHTML = '';
        }
    }
}

//displaying the result
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>"
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML='';
}