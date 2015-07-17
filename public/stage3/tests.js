'use strict';

describe('ステージ3（意図した通りに DOM 要素の構造を変更できるようになる）', function() {
  describe('DOMインターフェース編', function() {
    it('1 番の要素から幽霊要素を除去する', function() {

      // チュートリアル
      //
      // ここに以下のコードを記述してください。
      //
      // var element = document.querySelector('#firebrick');
      // var ghost = document.querySelector('.firebrick-ghost');
      // element.removeChild(ghost);


      // var element = document.querySelector('#firebrick');
      // var ghost = document.querySelector('.firebrick-ghost');
      // element.removeChild(ghost);

      var element = document.getElementById('firebrick');
      var ghost = document.querySelector('.firebrick-ghost');
      element.removeChild(ghost);

      expect(element.childNodes.length).to.equal(1);
      expect(element).to.have.property('textContent', '1');
    });


    it('2 番の要素からインベーダー要素を除去する', function() {

      // ここにコードを記述してください。

      var darkorange = document.getElementById('chocolate');
      var invader = document.querySelector('.chocolate-space-invader');
      darkorange.removeChild(invader);

      expect(darkorange.childNodes.length).to.equal(1);
      expect(darkorange).to.have.property('textContent', '2');
    });


    it('3 番の要素の左右の幽霊要素をすべて除去する', function() {

      // ここにコードを記述してください。

      var darkorange = document.querySelector('.mediumseagreen');
      var everyghost = document.querySelectorAll('.mediumseagreen-ghosts');
      for(var i = 0; i < everyghost.length; i++){
        darkorange.removeChild(everyghost[i]);
      }
      expect(darkorange).to.have.property('textContent', '3\uD83C\uDF3F');
    });


    it('4 番の水色の要素の最後に要素を追加する', function() {
      var elementToAdd = document.createElement('span');
      elementToAdd.textContent = '\uD83D\uDC2C';

      // 上の elementToAdd を追加するコードをここに記述してください。

      var turquoise = document.querySelector('.turquoise');
      turquoise.appendChild(elementToAdd);

      expect(turquoise.childNodes.length).to.equal(2);
      expect(turquoise).to.have.deep.property('childNodes[0].textContent', '4');
      expect(turquoise).to.have.deep.property('childNodes[1]').equal(elementToAdd);
    });


    it('5 番の青色の要素の最初に要素を追加する', function() {
      var elementToAdd = document.createElement('span');
      elementToAdd.textContent = '\uD83D\uDC1F';

      // 上の elementToAdd を、5 番の青色の要素の最初に追加するコードを
      // ここに記述してください。

      var blockquote = document.querySelector('blockquote');
      blockquote.insertBefore(elementToAdd, blockquote.firstChild);

      expect(blockquote.childNodes.length).to.equal(2);
      expect(blockquote).to.have.deep.property('childNodes[0]').equal(elementToAdd);
      expect(blockquote).to.have.deep.property('childNodes[1].textContent', '5');
    });
  });


  describe('jQuery 編', function() {
    it('6 番の要素から幽霊要素を除去する', function() {

      // チュートリアル
      //
      // jQuery でも同じことをおこなってみましょう。
      // ここに以下のコードを記述してください。
      //
      // $('.brown-ghost').remove();


      var $brown = $('#brown');
      var $ghost = $('.brown-ghost');
      $ghost.remove();

      expect($brown.children()).to.have.length(0);
      expect($brown).to.have.text('6');
    });


    it('7 番の要素からインベーダー要素を除去する', function() {

      // ここにコードを記述してください。

      var $darkorange = $('#darkorange');
      var $invader = $('.darkorange-space-invader');
      $invader.remove();

      expect($darkorange.children()).to.have.length(0);
      expect($darkorange).to.have.text('7');

      // 参考情報
      // http://api.jquery.com/category/manipulation/
    });


    it('8 番の要素の左右の幽霊要素をすべて除去する', function() {

      // ここにコードを記述してください。


      var $limegreen = $('.limegreen');
      var $ghosts = $('.limegreen-ghosts');
      $ghosts.remove();

      expect($limegreen).to.have.text('8\uD83C\uDF3F');
    });


    it('9 番の水色の要素の最後に要素を追加する', function() {
      var $elementToAdd = $('<span>\uD83D\uDC2C</span>');

      // 上の $elementToAdd を追加するコードをここに記述してください。

      var $mediumturquoise = $('.mediumturquoise');
      $mediumturquoise.append($elementToAdd);

      expect($mediumturquoise.children()).to.have.length(1);
      expect($mediumturquoise).to.have.text('9\uD83D\uDC2C');
    });


    it('10 番の青色の要素の最初に要素を追加する', function() {
      var $elementToAdd = $('<span>\uD83D\uDC1F</span>');

      // 上の $elementToAdd を追加するコードをここに記述してください。

      var $p = $('p');
      $p.prepend($elementToAdd);

      expect($p.children()).to.have.length(1);
      expect($p).to.have.text('\uD83D\uDC1F10');
    });
  });
});
