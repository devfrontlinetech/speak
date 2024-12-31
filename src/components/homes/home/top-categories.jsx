import Link from 'next/link';

const category_contents = {
    title: 'Top Categories',
    // text: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore',
    category_items: [
        {
            delay: '50',
            color: 'color-primary-style',
            icon: 'icon-9',
            title: 'Spoken English',
             link: '/spoken-class'
        },
        {
            delay: '100',
            color: 'color-secondary-style',
            icon: 'icon-10 art-design',
            title: 'IELTS',
            link: '/ielts'
        },
        {
            delay: '150',
            color: 'color-extra01-style',
            icon: 'icon-11 personal-development',
            title: 'CELPIP',
            link: '/celpip'
        },
        {
            delay: '50',
            color: 'color-tertiary-style',
            icon: 'icon-12 health-fitness',
            title: 'TOEFL',
             link: '/toefl'
        },
        {
            delay: '100',
            color: 'color-extra02-style',
            icon: 'icon-13 data-science',
            title: 'PTE',
             link: '/pte'
        },
        {
            delay: '150',
            color: 'color-extra03-style',
            icon: 'icon-14',
            title: 'Competitive English Training',
             link: '/competitive-exam'
        },
        {
            delay: '50',
            color: 'color-extra04-style',
            icon: 'icon-15',
            title: 'Language Training',
             link: '/language-training'
        },
        {
            delay: '100',
            color: 'color-extra05-style',
            icon: 'icon-16 computer-science',
            title: 'Toastmasters Club Training',
             link: '/language-training'
        },
        {
            delay: '150',
            color: 'color-extra06-style',
            icon: 'icon-17 video-photography',
            title: 'Visa Interview Training',
             link: '/contact-us'
        }
    ]
}

const { title, text, category_items } = category_contents;

const TopCategories = () => {
    return (
        <div className="edu-categorie-area categorie-area-2 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h2 className="title">{title}</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>{text}</p>
                </div>
        
                <div className="row g-5">
                    {category_items.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6" data-sal-delay={`${item.delay}`} data-sal="slide-up" data-sal-duration="800">
                            <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <Link href={item.link}>
                                        <a>
                                            <h5 className="title">{item.title}</h5>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCategories;
