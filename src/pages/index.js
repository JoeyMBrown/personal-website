import React from "react"
<<<<<<< HEAD
import {  graphql, Link } from 'gatsby'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Layout = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'avenir'
        }}>
            <Navbar />
            <Header />
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <div key={frontmatter.path}
                         style={{marginBottom: '1rem'}}
                    >
                        <Link to={frontmatter.path}>
                            {frontmatter.title}
                        </Link>
                    </div>
                )
            })}

            <div>
                <Link to='/tags'>
                    Browse By Tag
                </Link>
            </div>

        </div>
    )
}

export const query = graphql`
query HomepageQuery {
    allMarkdownRemark (
        sort: {order: DESC, fields: [frontmatter___date]}
    ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }`


export default Layout
=======

export default () => <div>Hello world!</div>
>>>>>>> 3d914d1... Initial commit from gatsby: (https://github.com/gatsbyjs/gatsby-starter-hello-world.git)
