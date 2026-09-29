// css imports
import '@/css/sections/footer.css'

function Footer() {
    return (
        <section class="footer">
            <div class="mn">
                <strong class="footer-logo blk rlt">Brad FitzGerald</strong>
                <ul class="social flx gp-sm f_wrp f_c">
                    <li>
                        <a href="mailto:bradfitz03@gmail.com">Mail</a>
                    </li>
                    <li>
                        <a href="mailto:bradfitz03@gmail.com">LinkedIn</a>
                    </li>
                    <li>
                        <a href="mailto:bradfitz03@gmail.com">GitHub</a>
                    </li>
                </ul>
                <small class="flx-at-650 f_sb f_m">
                    <span>Built with React / Next.js and ❤️</span>
                    <span>© 2026 Brad FitzGerald</span>
                </small>
            </div>
        </section>
    )
}

export default Footer