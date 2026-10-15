(function(){
  document.querySelectorAll('[data-buybox]').forEach(function(box){
    var sp = box.querySelector('[data-sp]');
    var plans = box.querySelectorAll('[data-plan]');
    function set(p){
      plans.forEach(function(b){ var on = b.getAttribute('data-plan') === p; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
      if (sp) sp.disabled = p !== 'sub';
      var price = p === 'sub' ? box.getAttribute('data-sub') : box.getAttribute('data-one');
      document.querySelectorAll('.js-price').forEach(function(s){ s.textContent = price; });
    }
    plans.forEach(function(b){ b.addEventListener('click', function(){ set(b.getAttribute('data-plan')); }); });
    var main = box.querySelector('[data-main]');
    box.querySelectorAll('[data-pick]').forEach(function(t){ t.addEventListener('click', function(){
      if (main){ main.src = t.getAttribute('data-src'); main.alt = t.getAttribute('data-alt') || ''; }
      box.querySelectorAll('[data-pick]').forEach(function(x){ x.classList.toggle('is-on', x === t); x.setAttribute('aria-pressed', x === t); });
    }); });
  });
  if (document.querySelector('.mbar')) document.body.classList.add('has-mbar');
  document.querySelectorAll('[data-menu]').forEach(function(btn){
    btn.addEventListener('click', function(){ var nav = btn.closest('[data-nav]'); var open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });
  });
})();
