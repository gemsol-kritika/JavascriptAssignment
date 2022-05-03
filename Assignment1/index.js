(function(){
    function putData(data,tag){
        var tablerow=document.createElement("tr");
        for(var i=0;i<5;i++){
            var row=document.createElement(tag);
            row.appendChild(document.createTextNode(data[i]));
            tablerow.appendChild(row);
    
        }
        return tablerow;
    
    }
   
    
    var content=document.createElement("div");
    var Table=document.createElement("table");
    var tablehead=document.createElement("thead");
    var tablebody=document.createElement("tbody");
    tablebody.classList.add("stripe_table");
    content.style.backgroundColor = "cyan";
    Table.style.textAlign="center"
    Table.style.display="flex"
    Table.style.flexDirection="column"
    Table.style.justifyContent="center"
    Table.style.alignItems="center"
    Table.setAttribute("border","3");
    tablebody.setAttribute("class","table table-hover")
    Table.appendChild(tablehead);
    Table.appendChild(tablebody);
    tablehead.appendChild(putData(["Name","Age","DOB","Email","Company"],"th"));
    tablebody.appendChild(putData(["Kritika","21","01-03-2001","skritika2000@gmail.in","Gemini"],"td"));
    tablebody.appendChild(putData(["Aditi","28","02-10-1994","saditi123@gmail.in","Gemini"],"td"));
    tablebody.appendChild(putData(["Ahana","41","08-06-1981","sahaa000@gmail.in","Gemini"],"td"));
    tablebody.appendChild(putData(["Komal","31","01-03-1991","skomal7800@gmail.in","Gemini"],"td"));
    tablebody.appendChild(putData(["Sonal","25","11-02-1997","ssonal1300@gmail.in","Gemini"],"td"));
    content.appendChild(Table);
    document.body.appendChild(content);
})();
