// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';

// Or using the CommonJS version:
// const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic' );

ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );

const reply = document.querySelectorAll('.js-reply');
const textEditor = document.querySelector('.js-textEditor')
reply.forEach((el)=> {
	el.addEventListener('click', function(){
		textEditor.classList.toggle('hidden')
	})
})

const jsEditRight = document.querySelector('.js-editRight')
const jsEditArrow = document.querySelector('.js-editorArrow')
const jsEditBottomSection = document.querySelector('.js-editButtonSection')

jsEditRight.addEventListener('click', function(){
	jsEditArrow.classList.toggle('rotate-180')
	jsEditBottomSection.classList.toggle('editButtonSectionActive')

}  )