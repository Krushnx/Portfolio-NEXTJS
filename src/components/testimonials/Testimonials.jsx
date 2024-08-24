import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = () => {

    const testimonials = [
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod vehicula augue, a consectetur arcu tempor et. Donec ullamcorper orci non erat consectetur, at tristique sapien consequat. Sed sed risus ac augue tempor cursus. Morbi ut orci neque. Integer sit amet sapien velit, a convallis nulla.",
            name: "Test User",
            title: "A Tale of Two Cities",
            designation:'Software Developer',
            profile :'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            company:'Adobe',
            companyURL :'https://www.youtube.com',
            linkdedin : 'https://www.facebook.com'
        },
        {
            quote  :"Underneath the ancient oak tree, children played with unbridled joy, their laughter echoing through the air. A gentle breeze rustled the leaves, creating a serene backdrop for their adventures. Nearby, a dog slept peacefully, basking in the warmth of the sun. The scene was perfect, a snapshot of carefree happiness",
            name: "John Smith",
            title: "Hamlet",
            designation:'CEO & Founder',
            profile :'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc',
            company:'Oneplus',
            companyURL :'https://www.youtube.com',
            linkdedin : 'https://www.facebook.com'

        },

    ];


    return (
        <div className="md:mx-[45px] my-[30px] mx-[10px]  ">
            <h2 className='md:text-[100px] text-[70px] font-kanit leading-[85px] mb-[30px] tracking-tight '>Testimonials</h2>
            <p className="text-[30px] font-summery m-[20px]">What they say...</p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
            <div className="mb-[30px]"></div>
        </div>
    );
}

export default Testimonials;