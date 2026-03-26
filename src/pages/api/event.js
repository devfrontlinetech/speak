export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      img: '/assets/images/blog/blog-01.jpg',
      category: 'ONLINE',
      title: 'Become a Better Blogger: Content Planning',
      date: "Jan 10, 2026",
      comment: 9,
      sm_desc: 'Learn how to plan, structure, and publish engaging blog content that attracts and retains readers.',
      delay:'100',
      home_1:true,
    },
    {
      id: 2,
      img: '/assets/images/blog/blog-02.jpg',
      category: 'LECTURE',
      title: 'How to Keep Workouts Fresh in the Morning',
      date: "Feb 15, 2026",
      comment: 15,
      sm_desc: 'Discover simple strategies to keep your morning workouts consistent, effective, and motivating.',
      delay:'200',
      home_1:true,
    },
    {
      id: 3,
      img: '/assets/images/blog/blog-03.jpg',
      category: 'BUSINESS',
      title: 'Four Ways to Keep Your Workout Routine Fresh',
      date: "Mar 05, 2026",
      comment: 12,
      sm_desc: 'Explore practical tips to refresh your fitness routine and maintain long-term motivation.',
      delay:'300',
      home_1:true,
    }
  ])
}