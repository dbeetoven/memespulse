export const getServerSideProps = async () => {
    console.log(process.env.API_KEY);
  
    const res = await fetch(`${server}/api/?key=${process.env.API_KEY}`)
    const articles = await res.json()
  
    return {
      props: {
        articles,
      },
    }
  }
