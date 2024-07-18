interface ScrollProps {
    btnElement?: JSX.Element;
    rounded?: boolean;
  }
  
  const FeaturedScroll = ({
    btnElement,
    rounded = false,
  }: ScrollProps) => {
    return (
          <div className="flex flex-col items-start justify-center my-4">
            <div className="flex mx-auto">{btnElement}</div>
          </div>
    );
  };
  
  export default FeaturedScroll;

/* <FeaturedScroll
    btnElement={
    <button
      type='button'
      className={`text-orange-600 hover:text-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-full text-md px-5 py-2.5`}
      onClick={() => {
        window.open('https://www.youtube.com/embed/2nlSD0zD8Gk?si=agu4O16t3bzT7TlW', 'youtube', 'popup');
      }}
    >
      Next Video
    </button>
  }
  /> */