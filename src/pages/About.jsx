import React from 'react'
import Layout from "../components/layout/Layout"
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box >
        <Typography variant='h5' sx={{textAlign:"center",p:2,mt:3}} >
          Welcome to our Resturant

        </Typography>
        <p style={{padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mi in justo fermentum ultrices. Nulla facilisi. Donec vel neque at velit volutpat hendrerit. Donec sed nunc vel ipsum semper consectetur. Donec vel urna vel lectus rutrum semper. Sed vulputate, mauris at eleifend fermentum, velit risus ultricies velit, vel semper mi lectus non neque. Vestibulum ante ipsum primis in faucibus
          consequat nec. Maecenas ut turpis vel libero lobortis elementum. Donec et sem id arcu sodales maximus. Duis vel dui vel neque vestibulum ultricies.
        </p>
        <br/>
        <p style={{padding:"20px", textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non ad soluta natus sed ea laborum, sit vero. Qui quisquam aliquid ab ipsa impedit dolore facere, repellat maiores aperiam eum ea quidem rem quaerat similique optio! Tempora laudantium unde ut iste optio blanditiis voluptates deserunt eum temporibus amet, tenetur ex excepturi, placeat iusto debitis illum, corrupti ea atque. Tempore magnam totam dolores accusantium similique ut odio reiciendis consectetur in tenetur, maiores culpa molestiae nostrum velit debitis quo accusamus a commodi soluta ea voluptatem amet aliquam esse nobis! Sit praesentium alias aliquid accusantium aut corrupti architecto harum magnam expedita voluptate, dolores soluta eligendi. Expedita, quo nam ullam nulla voluptates alias repellat ipsam esse eveniet omnis repellendus minima voluptatibus officia. Magnam vel necessitatibus accusamus non a itaque, est vitae, explicabo consequatur pariatur harum ab eaque eius similique tenetur nobis labore incidunt nesciunt! Incidunt tempora blanditiis veniam, nemo, autem accusamus earum rerum reiciendis aspernatur unde deserunt accusantium tempore dignissimos facilis a repellendus nostrum illo perspiciatis atque voluptatem, delectus eius harum itaque exercitationem. Vero rerum inventore maiores, error quis ea optio magni, nulla sit neque cum totam dolorem, ut officia odit! Beatae rem explicabo mollitia dolores, consequuntur aut tempora molestias itaque distinctio voluptatem praesentium.</p>
      </Box>
    </Layout>
  )
}

export default About