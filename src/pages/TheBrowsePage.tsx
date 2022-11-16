
import VideoClipWelcome from '../components/VideoClipWelcome'
import VideoClipsCarousel from '../components/VideoClipsCarousel'
// import { useEffect } from 'react'
const mockUp = [
  {
    track_id: 81045635,
    title: "da five bloods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    match: "88%",
    year: 2020,
    movie_duration: "1hr:30min",
    maturity_rating: "18+",
    hd_quality: "HD",
    cast: ["Johnson Dwayne", "Anthonio Canda", "Kiddo Chris","Angelina Jolie" ],
    genre: ["Military movie", "Action & Adventure", "Adrenaline rush"],
    movie_tag: "Gritty",
    image: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSGm6NitMQJUjqUJIINTDxKvFFU4glshq-AXs-UA2R1Gh_35ldJh0lGB7vgAr6AkRJMVuVnFKf66AiQjYojbm89eapvumIPtWZk.webp?r=937",
    image_webp: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeA9hDh48zqGMLJyRM3UQf2rmK8voBrxrBz-SYgmwaKpVL0Orp8Vh74Wb75XqfP3qU6Wg1sHNajpjZtyih2ynLwddVqgmdjYdpAE.webp?r=224",
    director: "Christopher Momandorio",
    writer:["Anderson pete", "Colalan forman", "Juliet Handuia", "Gorge Coodman"],
    keywords:["violence", "language"],
    movie_similar:[
      {
        track_id: 8895635,
        title: "Lost Bullets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        match: "90%",
        year: 2021,
        movie_duration: "2hr:30min",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Gritty",
        image:"https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfIUDWu_lTpFpn4Ue4roYkG266IkqeMW3xRzkkSoPDAvZr72Q5J2z2iFqiHLXV0B3s5xciJCB7DARfTm4kOehqVjiXERJiMnI78JEyykue-pUT58W5qkU03ZMkLzJCZQX4U09x75rXTvExuf2Eh_iietSKRvvxQQgwNpJ6BW-c1T53R4cUWeEThnKNOGRK0.jpg?r=332"
      },
      {
        track_id: 9900635,
        title: "Tears of the Sun",
        image:"https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTZWp0JBTk-zay9qw-E7f2xjHS8vTItUhjKB1F5H8KJghpLZZQVhp2GswqVKmGZdhsjk6CBNUXk7G7TXzBRLqHHh_9qB1HYz2Xg.webp?r=639",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        match: "80%",
        year: 2017,
        movie_duration: "2hrs",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Exciting",
      },
      {
        track_id: 10063598,
        title: "Mosul",
        image: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXwd3FiiIzjkm7ocfHJdbZtlND-sYJVGuAfBehZaLX-CbK3-P6BB0-NJZBn8jx0R5wF_2Kgo__GmobP13f8BcPRxio1e4KQiXyf_axVhPCkJykFFOVZw8BCmGfdAUBYTi6H7.jpg?r=4a0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        match: "88%",
        year: 2018,
        movie_duration: "2hrs:30mins",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Exciting",
      },
      {
        track_id: 1635983,
        title: "Act of Valor",
        image: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT0RUGQr2yCHGGHYGUEiyWoAdXSWsvKy6VQNQV1CbhfAdmsDP3JdeDlKKlEdg3FtMSRn4x3JCRT1xaDLOw9JLcpwOF8bD_T-uHE.webp?r=5c2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        match: "98%",
        year: 2021,
        movie_duration: "1hrs:30mins",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Thrilling",
      }
    ]
  },
  {
    track_id: 111245635,
    title: "Volcanic Eruption",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    match: "80%",
    year: 2022,
    movie_duration: "2hr:30min",
    maturity_rating: "18+",
    hd_quality: "HD",
    cast: ["Johnson Dwayne", "Anthonio Canda", "Kiddo Chris","Angelina Jolie" ],
    genre: ["Comedy", "Action", "Adrenaline rush"],
    movie_tag: "Interesting",
    image: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSGm6NitMQJUjqUJIINTDxKvFFU4glshq-AXs-UA2R1Gh_35ldJh0lGB7vgAr6AkRJMVuVnFKf66AiQjYojbm89eapvumIPtWZk.webp?r=937",
    image_webp: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeA9hDh48zqGMLJyRM3UQf2rmK8voBrxrBz-SYgmwaKpVL0Orp8Vh74Wb75XqfP3qU6Wg1sHNajpjZtyih2ynLwddVqgmdjYdpAE.webp?r=224",
    director: "Christopher Momandorio",
    writer:["Anderson pete", "Colalan forman", "Juliet Handuia", "Gorge Coodman"],
    keywords:["violence", "language"],
    movie_similar:[
      {
        track_id: 85635,
        title: "Lost Bullets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        match: "90%",
        year: 2021,
        movie_duration: "2hr:30min",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Gritty",
        image:"https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfIUDWu_lTpFpn4Ue4roYkG266IkqeMW3xRzkkSoPDAvZr72Q5J2z2iFqiHLXV0B3s5xciJCB7DARfTm4kOehqVjiXERJiMnI78JEyykue-pUT58W5qkU03ZMkLzJCZQX4U09x75rXTvExuf2Eh_iietSKRvvxQQgwNpJ6BW-c1T53R4cUWeEThnKNOGRK0.jpg?r=332"
      },
      {
        track_id: 87635,
        title: "Tears of the Sun",
        image:"https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTZWp0JBTk-zay9qw-E7f2xjHS8vTItUhjKB1F5H8KJghpLZZQVhp2GswqVKmGZdhsjk6CBNUXk7G7TXzBRLqHHh_9qB1HYz2Xg.webp?r=639",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        match: "80%",
        year: 2017,
        movie_duration: "2hrs",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Exciting",
      },
      {
        track_id: 163598,
        title: "Mosul",
        image: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXwd3FiiIzjkm7ocfHJdbZtlND-sYJVGuAfBehZaLX-CbK3-P6BB0-NJZBn8jx0R5wF_2Kgo__GmobP13f8BcPRxio1e4KQiXyf_axVhPCkJykFFOVZw8BCmGfdAUBYTi6H7.jpg?r=4a0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        match: "88%",
        year: 2018,
        movie_duration: "2hrs:30mins",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Exciting",
      },
      {
        track_id: 598311,
        title: "Act of Valor",
        image: "https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT0RUGQr2yCHGGHYGUEiyWoAdXSWsvKy6VQNQV1CbhfAdmsDP3JdeDlKKlEdg3FtMSRn4x3JCRT1xaDLOw9JLcpwOF8bD_T-uHE.webp?r=5c2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        match: "98%",
        year: 2021,
        movie_duration: "1hrs:30mins",
        maturity_rating: "18+",
        hd_quality: "HD",
        movie_tag: "Thrilling",
      }
    ]
  }
]
export default function TheBrowsePage() {
    return(
        <section className="relative w-full flex flex-col justify-center">
            <VideoClipWelcome/>
            <div className="relative w-full space-y-10 px-4 sm:px-5 md:px-6 lg:px-8 transform -translate-y-[192px] text-lg">
              <div>
                <h1>New Release</h1>
                <VideoClipsCarousel dataContent={mockUp}/>
              </div>
            </div>
        </section>
    )
}