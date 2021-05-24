const AboutContent = () => {
  return (
    <>
      <div className="about-content">
          <h4 className="text-center text-title">What is Memes Pulse ?</h4>

          <p className="text-center">
            Memes pulse is an app that tracks the memes tokens of different
            blockchains, such as <em className="emphasized-text">ETH, EWC, BNB </em>ect ... putting in focus the most
            relevant data.
          </p>

        <h4 className="text-center text-title" >What’s the purpose of Memes Pulse ?</h4>
          <p className="text-center">
          Memes Pulse is a site where you can find  analytics of Memes Coins.The data comes from <em className="emphasized-text">Coingecko, Carbonswap, and other DEXs.</em>
          We want that with all the dog and cat memes that are in the crypto market, that there is a place to see the analytics of all together.
          </p>
        <h4 className="text-center text-title" >Can i support the devs?</h4>
          <p className="text-center hover hover-4">
          You can send us: ETH and ETH Tokens like Shibba, EWT/SUSU/SMUDGE to This wallet:
          </p>
          <p className="text-center">
          <code className="text-center wallet">0xEcAAb8C3Bf2301d381ac2a9Eeab0612B35f368c7</code>
          </p>
      </div>
    </>
  )
}
export default AboutContent
