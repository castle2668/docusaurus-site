import type { ReactNode } from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: '技術學習筆記',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        記錄前端開發的學習歷程，包含 <code>React</code>、<code>Vue</code>、
        <code>JavaScript</code> 等技術的實戰經驗與心得分享。
      </>
    ),
  },
  {
    title: '演算法與資料結構',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        從基礎的 Fizz Buzz 到複雜的排序演算法，系統性地學習程式設計的核心概念，
        提升解決問題的能力。
      </>
    ),
  },
  {
    title: '生活與旅遊分享',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        除了技術文章，也分享年度回顧、旅遊心得、電影清單等生活記錄，
        展現工程師的多面向生活。
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
