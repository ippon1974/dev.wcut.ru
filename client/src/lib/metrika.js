export default function Metrika() {
  return (
    <div>
         <script
                 dangerouslySetInnerHTML={{__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=114260497", "ym");
      
                ym(114260497, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
               `,
                  }}
                />
        <noscript>
          <div>
          <picture>
            <img src="https://mc.yandex.ru/watch/114260497" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </picture>
          </div>
        </noscript>
    </div>
  )
}
