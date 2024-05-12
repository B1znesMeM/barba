import gsap from 'gsap';

const leaveFromProject = (container) => {

    const activeLink = container.querySelector('a.is-active span')
    const projects = container.querySelectorAll('.project')
    const images = container.querySelectorAll('.img')
    const content = container.querySelector('.content')

    const tl = gsap.timeline({
        defaults: {
            duration: .4, ease: 'power1.in'
        }
    })

    tl
    .to(activeLink, { yPercent: 101, stagger: .05 }, 0)
    .to(projects, { xPercent: 100, stagger: .05 }, 0)
    .to(content, { autoAlpha: 0, ease: 'none' }, 0)
    .to(images, { xPercent: -100, stagger: .05 }, 0)


    return tl
}

export default leaveFromProject