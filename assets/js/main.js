
async function init(){
  const ip = await fetch('https://ipapi.co/json/').then(r=>r.json()).catch(()=>({}));
  document.getElementById('data').innerHTML = `<pre>${JSON.stringify(ip, null, 2)}</pre>`;
}
init();
