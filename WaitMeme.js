document.addEventListener("DOMContentLoaded", () => {
    function pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function eliminarLineaPorLinea(textAreaBorrar) {
        let lineas = textAreaBorrar.value.split("\n");
        
        let interval = setInterval(() => {
            if (lineas.length > 0) {
                lineas.shift();  
                textAreaBorrar.value = lineas.join("\n");  
            } else {
                clearInterval(interval);
            }
        }, 300);
    }
    let textArea = document.getElementById("Wait");
    let audio = new Audio('wait.mp3');
    async function ejecutar(){
        textArea.value = "";
        let wait = new Array(
            "              _________\n             /         \\\n            |  ()   ()  |\n  /\\/\\/\\    |     >     |\n/\\| | | |/\\ |   _____   |\n| | | | | |  \\_________/ \n|       / /       |\n \\_______/        |\n        \\_________| \\ \n                  |  |\n                  |  |\n                  |  | \n                  |\n                  |\n                  |\n                /   \\\n               /     \\\n              /       \\\n             /         \\",
            "              _________\n             /         \\\n            |  ()   (-  |\n            |     >     |\n            |   _____   |\n             \\_________/\n                  |\n                  |\n                / | \\ \n               /  |  \\\n               \\  |   \\\n                \\ |    \\\n                  |\n                  |\n                  |\n                /   \\\n               /     \\\n              /       \\\n             /         \\",
            "              _________\n             /         \\\n            |  ()   -)  |\n            |     >     |\n            |   _____   |\n             \\_________/\n                  |\n                  |\n                / | \\ \n               /  |  \\\n              |   |   \\\n               \\  |   |\n                  |\n                  |\n                  |\n                /   \\\n               /     \\\n              /       \\\n             /         \\",
            "              _________\n             /         \\\n            |  ()   --  |\n            |     >     |\n            |   _____   |\n             \\_________/\n                  |\n                  |\n                / | \\ \n               /  |  \\\n              |   |   |\n              |   |   |\n                  |\n                  |\n                  |\n                /   \\\n               /     \\\n              /       \\\n             /         \\",
            "              _________\n             /         \\\n            |  (-   ()  |\n            |     >     |\n            |   _____   |\n             \\_________/\n                  |\n                  |\n                / | \\ \n               /  |  \\\n              /   |   |\n             |    |  /\n                  |\n                  |\n                  |\n                /   \\\n               /     \\\n              /       \\\n             /         \\",
            "              _________\n             /         \\\n            |  -)   ()  |\n            |     >     |\n            |   _____   |\n             \\_________/\n                  |\n                  |\n                / | \\ \n               /  |  \\\n              /   |   /\n             /    |  / \n                  |\n                  |\n                  |\n                /   \\\n               /     \\\n              /       \\\n             /         \\"
        );
        let  boleano = true;
        let frame = 1;
        let i = 0;
        audio.play();
        await pause(750);
        textArea.value = wait[0];
        await pause(1200);
        for (i = 0; i < 100; i++) {
            if(frame==5){
                boleano = false;
            } else if(frame==1){
                boleano = true;
            }
            await pause(6*frame);    
            textArea.value = wait[frame];
            if(boleano){
                frame++;
            }
            else{
                frame--;
            }
        }
        textArea.value = wait[0];
        await pause(1400);
        for (i = 0; i < 100; i++) {
            if(frame==5){
                boleano = false;
            } else if(frame==1){
                boleano = true;
            }
            await pause(6*frame);    
            textArea.value = wait[frame];
            if(boleano){
                frame++;
            }
            else{
                frame--;
            }
        }
        textArea.value = wait[3];
        eliminarLineaPorLinea(textArea);
    }
    alert("Hola mocosa, se que esto está un poco cutre, pero trate de hacerlo lo mejor parecido que pude, espero te guste\nAdemás te daré como 5 segundos porque tienes que dar permiso de que se escuche un audio o video\n\nPdtt: Te la cumplí desgraciada, quiero mis brownies");
    ejecutar();
});
