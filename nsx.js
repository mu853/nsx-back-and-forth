function create_newversion(dropdown, href, text){
    //追加のDrop Down選択肢を作成
    newversion = document.createElement("a");
    newversion.className = "dropdown-item version-item px-3 py-1";
    newversion.href = href;
    newversion.appendChild(document.createTextNode(text));
    dropdown.appendChild(newversion);
}

//Drop Downメニューを取得
dropdown = document.getElementsByClassName("dropdown-menu version-list-wrapper");
if(dropdown && dropdown.length >= 1){
    dropdown = dropdown[0];
    current_url = window.location.href;
 
    //NSX 3.x系の場合は4.2のリンクを追加
    pattern = /VMware-NSX-T-Data-Center\/[0-9]\.[0-9]\//;
    if(current_url.match(pattern)){
        create_newversion(dropdown, current_url.replace(pattern, "VMware-NSX/4.0/"), "VMware NSX 4.0 *");
        create_newversion(dropdown, current_url.replace(pattern, "VMware-NSX/4.1/"), "VMware NSX 4.1 *");
        create_newversion(dropdown, current_url.replace(pattern, "VMware-NSX/4.2/"), "VMware NSX 4.2 *");
    }

    //NSX 4.x系の場合は3.2のリンクを追加
    pattern = /VMware-NSX\/[0-9]\.[0-9]\//;
    if(current_url.match(pattern)){
        create_newversion(dropdown, current_url.replace(pattern, "VMware-NSX-T-Data-Center/3.1/"), "VMware NSX T Data Center 3.1 *");
        create_newversion(dropdown, current_url.replace(pattern, "VMware-NSX-T-Data-Center/3.2/"), "VMware NSX T Data Center 3.2 *");
    }
}

//現在の表示言語を取得
spans = document.getElementById("localeDropDownMenuButton").getElementsByTagName("span");
current_locale = "";
for(let i = 0; i < spans.length; i++){
    if(spans[i].classList.contains("currentLocale")){
        current_locale = spans[i];
        break;
    }
}

//URLに合わせて表示言語を修正
if(current_locale){
    matches = window.location.href.match(/\/([a-w]+)\/VMware-NSX/);
    if(matches){
        current_locale.textContent = matches[1];
    }
}
