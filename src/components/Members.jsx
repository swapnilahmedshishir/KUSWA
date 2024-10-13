import placeholderMale from "../assets/Male.jpeg";
import placeholderFemale from "../assets/Female.jpeg";

const colors = [
  "#DC143C", // Crimson Red
  "#36454F", // Charcoal Gray
  "#800020", // Burgundy
  "#708090", // Slate Gray
  "#800000", // Maroon
  "#B2BEB5", // Ash Gray
  "#D62A3F", // Deep Scarlet
];

const data = [
  // prsident
  {
    title: "President",
    data: [
      {
        name: "হা. মাও. ছফিউল্লাহ্ মমিন",
        designation: "President",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    ],
  },
  //   secrity
  {
    title: "Secretary",
    data: [
      {
        name: "অ্যাড. মোঃ মিজানুর রহমান",
        designation: "Secretary",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    ],
  },
  // অর্থ সম্পাদক
  {
    title: "অর্থ সম্পাদক",
    data: [
      {
        name: "হা. মাও. আহসানউল্লাহ শরিফ",
        designation: "অর্থ সম্পাদক",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
      },
    ],
  },
  // দপ্তর সম্পাদক
  {
    title: "দপ্তর সম্পাদক",
    data: [
      {
        name: "হা. নকিবুল্লাহ",
        designation: "দপ্তর সম্পাদক",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
      },
    ],
  },
  //   ধর্ম বিষয়ক সম্পাদক
  {
    title: "ধর্ম বিষয়ক সম্পাদক",
    data: [
      {
        name: "মাও. আলাউদ্দীন দুলাল",
        designation: "ধর্ম বিষয়ক সম্পাদক",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মাও. রফিকুল ইসলাম",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. আব্দুল্লাহ",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "মাও. আমিরুল ইসলাম",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: " হা. মাও. সোলায়মান হোসেন",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. মাও. ইদ্রিস আলী জাকারিয়া",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. মাও. আব্দুল আলিম",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. মাও. আব্দুর রাজ্জাক",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. আব্দুল হাকিম",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: " হা. মাও. কাওসার আহমেদ",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. মোঃ বায়েজিদ রব্বি",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. মাও. ওয়ালিউল্লাহ",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "হা. মাও. আতিকুর রহমান",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
    ],
  },
  // মানবসম্পদ উন্নয়ন বিষয়ক সম্পাদক
  {
    title: "মানবসম্পদ উন্নয়ন বিষয়ক সম্পাদক",
    data: [
      {
        name: "মাও. তুরাব আলী",
        designation: "মানবসম্পদ উন্নয়ন বিষয়ক সম্পাদক",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মোঃ আশিক",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "হা: কুরবান",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
  },

  //ব্যবসা বিষয়ক সম্পাদক
  {
    title: "ব্যবসা বিষয়ক সম্পাদক",
    data: [
      {
        name: "মোঃ রবিউল ইসলাম",
        designation: "ব্যবসা বিষয়ক সম্পাদক",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
  },
  //সমাজসেবা সম্পাদক
  {
    title: "সমাজসেবা সম্পাদক",
    data: [
      {
        name: "শহিদুল ইসলাম ত্বহা",
        designation: "সমাজসেবা সম্পাদক",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "নজরুল ইসলাম রঞ্জু",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "শেখ রাসেল",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মোঃ আসলাম হোসাইন",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মোঃ হাবিব শেখ",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মোঃ মামুন হোসেন",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মোঃ আইদুল ইসলাম",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "মোঃ ইমরান হোসেন",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "শহিদুল ইসলাম বিজয়",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "জামান আসিফ",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
  },
  //demo data
  {
    title: "",
    data: [
      {
        name: "",
        designation: "",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "",
        designation: "সদস্য",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
  },

  //   other
  {
    title: "Members",
    data: [
      {
        name: "Amit Kumar Badculia",
        designation: "Executive Member",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        name: "Burhan ud Din Khan",
        designation: "Executive Member",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      {
        name: "Taranpreet Kour",
        designation: "Executive Member",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Fasli Ali",
        designation: "Executive Member",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        name: "Manisha Sharma",
        designation: "Executive Member",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Roohi Gupta",
        designation: "Executive Member",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        name: "Bashir Ahmed Shiekh",
        designation: "Executive Member",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
      },
    ],
  },
];

const TreeNode = ({ name, designation, image, gender, pos }) => (
  <div className="flex flex-col text-center border border-gray-100 py-4 bg-white h-full rounded-md drop-shadow hover:shadow-md">
    <div
      className="flex flex-col gap-4 items-center text-center"
      // style={{ borderColor: colors[pos] }}
    >
      <img
        src={gender === "male" ? placeholderMale : placeholderFemale}
        // src={image}
        alt={name}
        className="w-32 rounded-full border-black border"
      />
      <div className="flex flex-col text-center">
        <p className="text-lg md:text-xl">{name}</p>
        <p className="text-xs md:text-sm text-red-600">{designation}</p>
      </div>
    </div>
  </div>
);

const TreeBranch = ({ children, color }) => (
  <div
    className="flex flex-col w-fit m-auto rounded-lg px-3 py-6 bg-gray-50 border-t-2 border-b-2"
    style={{ borderColor: color }}
  >
    <div className="flex flex-wrap justify-center gap-8 w-full">{children}</div>
  </div>
);

const Tree = () => (
  <div className="tree flex flex-col max-w-5xl m-auto overflow-x-auto p-5">
    {data.map((level, index) => (
      <>
        {/* <h2 className="text-2xl font-bold mt-6">{level.title}</h2> */}
        <span
          className={`${!index && "hidden"} w-0.5 h-8 m-auto`}
          style={{ backgroundColor: colors[index] }}
        ></span>
        <TreeBranch key={index} color={colors[index]}>
          {level.data.map((person, idx) => (
            <div key={idx} className="w-[17rem]">
              <TreeNode {...person} pos={index} />
            </div>
          ))}
        </TreeBranch>
      </>
    ))}
  </div>
);

export default Tree;
