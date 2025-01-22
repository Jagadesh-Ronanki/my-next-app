import { GetServerSidePropsContext } from "next";

// pages/static-page.js
export default function StaticPage() {
    return (
      <div>
        <h1>Static Page with getStaticProps</h1>
        <p>Data fetched at build time:</p>
      </div>
    );
  }
  
  // This function is called at build time to generate static props
//   export async function getStaticProps() {
//     // Simulate fetching data (e.g., from an API or database)
//     const data = ["Item 1", "Item 2", "Item 3"];
    
//     return {
//       props: {
//         data, // Pass the fetched data to the page
//       },
//     };
//   }

  
  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const userAgent = context.req.headers['user-agent'];
    return {
      props: {
        userAgent, 
      },
    };
  }
  