const inputTwitter = document.querySelector('#input-twitter');
const btnAdd = document.querySelector('#btn-add');
const btnDelete = document.querySelector('.btn-delete');
const twitterBox = document.querySelector('.tweetBox');
const postTwitter = document.querySelector('#post-twitter');

var idPost = 0;

const deleteFn = function (e) {
  e.closest('.post').remove();
};

const editarFn = function (e) {
  const post = e.closest('.post');
  post.querySelector('p').setAttribute('contentEditable', true);
  post.querySelector('p').focus();
};

function exibirAlert() {
  swal('Salvo!', 'Salvo com sucesso.', 'success');
}

const editBtnName = (elemento) => {
  elemento.textContent = 'Salvo';
};

btnAdd.onclick = function (e) {
  e.preventDefault();

  const newPost = `
  <div class="post" id="post-${idPost}">
        <div class="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
          <div class="buttonOption">
         
        </div>
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> 
                  verified </span>@somanathg</span
                >
                  <span onclick="deleteFn(this)" 
                  class="btn-delete editBtn"> Deletar</span
                >
                  <span onclick="editarFn(this)" 
                  class="btn-edit editBtn"> Editar</span
                >
                  <span onclick="exibirAlert(), editBtnName(this)" 
                  class="editBtn"> Salvar</span
                >
              </h3>
            <div class="post__headerDescription">
              <p contenteditable="false">${inputTwitter.value}</p>
            </div>
          </div>
          
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>
  `;

  postTwitter.insertAdjacentHTML('afterbegin', newPost);

  inputTwitter.value = '';

  idPost++;
};

