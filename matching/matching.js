var items = document.getElementsByClassName('items');
var already_selected = false;

function choosing(){
    if(already_selected){
        if(this.id == 'chosen'){
            this.style.color = 'black';
            this.id = '';
            already_selected = false;
        }else{
            if(this.parentElement.id == chosen_item.parentElement.id){
                chosen_item.id = '';
                chosen_item.style.color = 'black';
                this.id = 'chosen';
                this.style.color = 'blue';
                chosen_item = this;
            }else{
                if(chosen_item.className == this.className){
                    chosen_item.style.opacity = '0.3';
                    this.style.opacity = '0.3';
                    chosen_item.style.color = 'black'
                    already_selected = false
                };
            };
        };
    }else{
        this.id = 'chosen'
        this.style.color = 'blue';
        chosen_item = this;
        already_selected = true;
    };
};

for(var i = 0; i<items.length; i++){
    items[i].addEventListener("click", choosing);
};

