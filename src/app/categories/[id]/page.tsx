
import Bubbletext from '@/app/(components)/bubble';
import { VscTriangleDown } from "react-icons/vsc";
import { TfiReload } from "react-icons/tfi";
import Breadcrumb from '@/app/(components)/breadcrumb';
import { getAllPosts } from '@/app/(handlers)/requestHandlers';
import SwiperPosts from '@/app/(components)/swiperpost';
import CardPost from '@/app/(components)/cardPost';
import { getLatestPostsFromCategory } from '@/app/(handlers)/requestHandlers';
import { getAllFromCategory } from '@/app/(handlers)/requestHandlers';
import Categoriepostswithreload from '@/app/(components)/categoriepostswithreload';


function Populattagss() {
  return (
    <>
    <div className='w-full max-w-screen-xl'>
    <section className="container  mx-auto  py-6">
        <div className="flex flex-wrap gap-2">
          {["Politics", "Sports", " Entertainment ", " Business "].map((tag, i) => (
            <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

function decodeSpaces(str: string) {
  return str.replace(/%20/g, ' ');
}

export default  async function Page({ params, }: { params: Promise<{ id: string }> }) {
  const pathname = await params
  const cate = decodeURIComponent(pathname.id)
  const current_categotie = await getAllFromCategory(cate)
          const LatesstContent = await getLatestPostsFromCategory(cate)
  // const [current_categotie,setCurrent_categotie] = useState<any>("");
  // const [categoriecontent,setCategoriecontent] = useState<any>("");
  // const [LatesstContent,setLatesstContent] = useState<any>("");
  console.log(current_categotie)
  console.log("hado homa latest posts :", LatesstContent);
  // console.log("hada hwa l content) :", Content);
  // console.log("hado homa :", categoriecontent);
  
  // const [path, setPath] = useState<string>("");
  // const [id, setId] = useState<string>("");
  // const [Content, setContent] = useState<any>();
  
  const reloadcontent = async () => {             
    console.log("salam sava");
  }
  
  const Postslist = ["" , "", "", "", "", "", ""];
  // const pathname = usePathname();
  
  // useEffect(() => {
  //   async function hoho() {
  //     setCurrent_categotie ( cate)
  //     console.log("a moulay l categoryu ? :", cate);
  //   }
  //   hoho();
  // }, [current_categotie]);
  // useEffect(() => {
    
  //   async function hoho() {

  //      console.log("a sidi ache hada ? :", current_categotie);
  //      if (current_categotie)
  //       {
  //         setCategoriecontent ( koko)
  //         setLatesstContent ( lolo)
  //       }
  //   }
  //   hoho();
  // }, [current_categotie]);
  // console.log("this is the content of the page :", Content);
  return(
    <main className=" flex flex-col  w-full  max-w-screen-xl justify-center px-10 py-6  mx-auto">
      <Breadcrumb />
      <div className="relative  w-full flex justify-between mb-5">
              <div className="mb-2">
                <Bubbletext _text={cate} _width={"135px"}/>
              </div>
      </div>

      <div className="w-full bg-pink-500 h-96 mb-14">
        <SwiperPosts posts={LatesstContent?.data} />
      </div>

      <div className=" flex flex-row justify-between  ">
        <h2 className="font-full  text-center flex items-center justify-center font-medium font-[Baskerville]" 
        style={{ fontSize: `calc(1.325rem + 0.9vw)` }}

        > You May Like </h2>
        <button className="bg-black h-fit text-white py-[6px] px-[12px] flex flex-row font-[Baskerville] gap-1" > Latest Post <VscTriangleDown /> </button>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:w-full  lg:gap-10">

      {/* <div className="lg:w-full">

          <div className="w-full flex flex-col gap-[24px]  my-[30px] md:grid md:grid-cols-2 lg:mt-0 ">
            {(
              Postslist.map((el, index)=>(
                <div key={index} className="w-full h-[300px] md:w-[100%] bg-pink-400">
                 {current_categotie?.data?.length > 0 && (
                    <CardPost
                      title={current_categotie.data[0]?.title || "Untitled"}
                      imageUrl={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        (current_categotie.data[0]?.banner?.url || "/default-image.jpg")
                      }
                      category={current_categotie.data[0]?.category || "Uncategorized"}
                      author={current_categotie.data[0]?.author || "Unknown Author"}
                      date={current_categotie.data[0]?.publishedAt || "Unknown Date"}
                    />
                  )}
                </div>
              ))
            )}
          </div>

          <button className="bg-black text-white px-3 py-2 flex flex-row font-[Baskerville] gap-2 w-fit items-center"  ><TfiReload /> Load more</button>
      </div> */}

      <Categoriepostswithreload current_categotie={current_categotie} /> 


      <div className=" lg:w-[200px]">
        <div className="font-[Baskerville] text-[20px]"> Popular Tags</div>
        <Populattagss />
        <div className="w-full flex flex-col justify-center pt-[30px]">

        <div className="w-[300px] h-[500px]  bg-pink-800 text-yellow-400 flex justify-center items-center self-center mb-[15px] lg:w-[200]">
            Ad PlaceHolder
        </div>
        <div className="w-[300px] h-[500px] lg:h-[400px] bg-pink-800 text-yellow-400 flex justify-center items-center self-center lg:w-[200]">
            Ad PlaceHolder
        </div>
        </div>
      </div>
      </div>
    </main>  
  )
}
