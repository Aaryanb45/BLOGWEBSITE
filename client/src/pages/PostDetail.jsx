import React from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link} from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container"> 
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttton">
             <Link to ={`/posts/werwer/edit`}className='btn sm priamry'>Edit</Link>
             <Link to ={`/posts/werwer/delete`}className='btn sm danger'>Delete</Link>
          </div>
        </div> 
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus ducimus reprehenderit animi praesentium minus, dolores labore officiis ab consequatur velit aperiam voluptate eveniet porro explicabo magnam? Accusantium laboriosam quia maiores, magni similique explicabo nulla, cupiditate ipsum tempora cumque nemo.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sapiente maiores aspernatur dolorum aliquam! Nemo rem sit accusantium blanditiis assumenda voluptatem ab ea temporibus molestiae fugit corrupti ad dolor quos explicabo velit possimus similique magni praesentium, exercitationem porro corporis illo molestias error quo. Odit hic officia et. Ut laboriosam quos ullam harum. Eos repellat voluptate, magni, facere quis, dolorum debitis temporibus doloribus quibusdam inventore vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis fugiat. Magnam necessitatibus atque numquam repellendus alias nobis voluptate commodi odit deserunt dolorem. Adipisci cupiditate exercitationem obcaecati, debitis esse praesentium dignissimos eaque earum soluta impedit ratione odit eum vel iusto dolore dolorem quod doloremque. Odio eligendi eaque ex corporis voluptatum necessitatibus ad quam, inventore autem excepturi minima omnis quas aut ut eius tenetur ullam repudiandae maiores rerum provident perspiciatis saepe error, vitae expedita. Fugit molestias ut velit omnis magni quod veniam nesciunt iusto ducimus itaque modi dignissimos, nulla nam pariatur, quidem consequuntur corporis eveniet odit culpa sint dicta laborum ab magnam mollitia! Laudantium, consequuntur explicabo quos ipsa minima accusantium reprehenderit eveniet, sint eius a cupiditate corrupti repellat omnis consequatur ea nihil obcaecati exercitationem. Id explicabo recusandae quas maiores cumque non corrupti veritatis nisi, earum sunt ut deleniti similique, quo esse fuga voluptas minus voluptates expedita velit, vel eos quasi illo aliquid inventore. Obcaecati rem quia molestiae, explicabo voluptatibus necessitatibus aspernatur beatae iusto natus possimus animi voluptas numquam error sed sunt esse odit. Accusamus omnis debitis recusandae beatae ad voluptatum praesentium quidem quo maxime esse assumenda maiores aspernatur quod adipisci cumque, nemo quasi ducimus sapiente? Et suscipit praesentium repellat debitis minima!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus error harum cum reprehenderit ab cumque voluptatum laboriosam hic dolore, corporis, deleniti itaque dolorem debitis possimus expedita. Ex reprehenderit similique exercitationem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo sint, minus reprehenderit, possimus officia eius commodi modi necessitatibus hic assumenda accusamus eveniet? Eos cumque minus doloremque quisquam corrupti, hic ex culpa iste, eaque commodi voluptatem, incidunt laudantium et omnis! Totam, sequi id eveniet possimus optio adipisci reprehenderit accusamus deleniti ducimus facilis corporis, veniam natus, laudantium facere quod repellendus aliquam voluptates. Ipsa doloribus iure quidem nam fugiat! Ipsa a recusandae at officiis repellat? Repellendus quae magnam accusamus optio magni est nam sunt voluptates excepturi molestias enim consequatur impedit asperiores blanditiis ut totam quam, quasi nostrum corrupti? Ut, voluptate praesentium! Placeat cum expedita dolore repellendus consectetur ipsum iusto recusandae similique nobis? Quibusdam rerum optio illum maxime ab? Molestiae quas deserunt provident ipsa ratione dignissimos consectetur ullam magnam explicabo a accusantium deleniti iste, non voluptate sequi doloribus rem atque laboriosam incidunt voluptatibus eaque quos? Magnam ipsam nisi asperiores. Accusantium tempore totam voluptas sit a inventore veniam minus maxime, beatae ipsa veritatis sapiente alias eaque quidem delectus, corrupti eveniet ipsam, hic debitis temporibus quam doloribus. Veritatis, accusantium odio delectus corrupti fugiat in eius eum omnis perferendis deserunt deleniti possimus atque doloribus quasi magni ipsum voluptatum facilis officiis esse saepe vitae consequuntur impedit maxime! Rem perferendis maxime culpa, molestiae reiciendis vero laborum nobis assumenda! Laboriosam quibusdam quaerat neque assumenda velit nesciunt saepe, vero sit, beatae asperiores quisquam repellendus minus et reiciendis dolorem mollitia rerum! Voluptatem assumenda, quo tenetur qui ducimus id obcaecati dolor odio odit, explicabo impedit exercitationem! Iusto porro mollitia ipsum voluptate? Quaerat architecto earum nisi! Voluptatum vel odit maxime facere fugit suscipit quo molestias nemo iste dolorum, animi veniam, velit magni doloribus, provident placeat. Quis consectetur nostrum quia, maxime nobis ut ad illum! Atque tenetur temporibus fuga, quibusdam explicabo molestiae odit voluptatum nulla omnis, excepturi eveniet, quo sed laudantium deserunt! Ratione, natus?
        </p>
      </div>
    </section>
  )
}

export default PostDetail