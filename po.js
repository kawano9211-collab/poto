const splash = document.getElementById('splash');
const main = document.getElementById('main');
const video = document.getElementById('splashVideo');

video.addEventListener('ended', () => {
    // スプラッシュ非表示（フェードアウト）
    splash.classList.add('hidden');

    // 少し待ってから main 表示（CSSアニメの時間に合わせる）
    setTimeout(() => {
        splash.style.display = 'none';
        main.style.display = 'block';
    }, 500); // 0.5秒後に切り替え（CSSの transition と合わせる）
});
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
const closeButton = document.getElementById('closeButton');

function toggleMenu() {
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
let slideIndex = 0;  // 初期のスライド位置を0に設定

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // すべてのスライドを非表示にする
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 次のスライドを表示
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  // 最後のスライドの次は最初に戻る

    slides[slideIndex - 1].style.display = "block";  // 現在のスライドを表示

    setTimeout(showSlides, 3000);  // 3秒後に次のスライドを表示
}

// 最初のスライドを表示
showSlides();