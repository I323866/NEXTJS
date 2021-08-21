import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Layout from "../../components/header/Layout";
export default function Nav({ title = '气象中心资产管理系统' }) {
  return (
    <Layout>
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <img src="/log.png" widht="32" height="32" />
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          {/* <Header /> */}
          <ButtonLink href="/new">新建</ButtonLink>
        </div>
      </nav>
    </Container>
    </Layout>
  )
}
