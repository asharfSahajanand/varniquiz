<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1615420563101212"
crossorigin="anonymous"></script>

(function () {

  const adSlots = [
    { divId: "myw_top_1", slot: "4306431074", width: 300, height: 250 },
    { divId: "myw_top_2", slot: "9890531561", width: 320, height: 300 },
    { divId: "myw_top_3", slot: "7835213866", width: 250, height: 250 },
  ];

  // Loader
  const style = document.createElement("style");
  style.textContent = `
    #ad-loader-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:99999;
      flex-direction:column;
      gap:16px;
    }
    .spinner {
      width:52px;height:52px;
      border:5px solid rgba(255,255,255,0.2);
      border-top-color:#fff;
      border-radius:50%;
      animation:spin .8s linear infinite;
    }
    @keyframes spin { to { transform:rotate(360deg);} }
  `;
  document.head.appendChild(style);

  function showLoader() {
    const el = document.createElement("div");
    el.id = "ad-loader-overlay";
    el.innerHTML = `<div class="spinner"></div><div style="color:#fff">Loading Ad...</div>`;
    document.body.appendChild(el);
  }

  function hideLoader() {
    document.getElementById("ad-loader-overlay")?.remove();
  }

  // Inject ads
  function loadAds() {
    adSlots.forEach(({ divId, slot, width, height }) => {
      const container = document.getElementById(divId);
      if (!container) return;

      container.innerHTML = `
        <ins class="adsbygoogle"
          style="display:inline-block;width:${width}px;height:${height}px"
          data-ad-client="ca-pub-1615420563101212"
          data-ad-slot="${slot}">
        </ins>
      `;

      (adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  // Flow
  showLoader();

  setTimeout(() => {
    hideLoader();
    loadAds();
  }, 1000);

})();
