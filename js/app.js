// Site açılırken To-Do listesi gözükmesin.
let list_part = document.getElementById("list-part");
list_part.style.display = "none";

// Sayaç
let count_task = 0;

// To-Do ekleme butonu
let button = document.querySelector("#push");

// To-Do Listesi
let taskQuery = document.querySelector(".tasks");

// Butona tıklama fonksiyonu
button.addEventListener("click", function() {

    // Input'tan veri alma
    let inputValue = document.querySelector("#add-part input").value;

    // Input'taki değerin uzunluğu sıfırsa uyarı göster.
    if(inputValue.length == 0) {

        alert("Lütfen bir To-Do yazınız!");
    }

    // Input'taki değer sıfır değilse To-Do List'te eleman ekle.
    else {

        // To-Do List görünür yapma
        list_part.style.display = "block";

        // HTML elemanlarını ekle
        taskQuery.innerHTML += `
            <div class="task">
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                <div class="task-box">
                    <p class="task-item">${inputValue}</p>
                </div>
            </div>
        `;

        count_task++;

        // Silme butonları
        let currentTasks = document.querySelectorAll(".delete");

        for(let i=0; i < currentTasks.length; i++) {

            currentTasks[i].onclick = function() {

                // Elemanı kaldır
                this.parentNode.remove();
                count_task--;
                document.getElementById("counter").innerHTML = `${count_task} adet`;
            }
        }

        // Elemanlara tıklama (üstü çizili yapma)
        let tasks = document.querySelectorAll(".task");

        for(let i=0; i < tasks.length; i++) {
            
            tasks[i].onclick = function() {

                // completed class'ını tetikle
                this.classList.toggle("completed");
            }
        }

        // Butona tıklandıktan sonra input'taki veriyi sıfırla
        document.querySelector("#add-part input").value = "";

        // Sayaçtaki değeri ekle
        document.getElementById("counter").innerHTML = `${count_task} adet`;
    }
});