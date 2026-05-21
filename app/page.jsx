import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CircleGauge,
  Drill,
  Factory,
  PackageCheck,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";

const advantages = [
  {
    icon: Drill,
    title: "深孔作业更稳定",
    text: "适合板材、柜体、门板等较深孔位预钻，降低偏孔和崩边风险。"
  },
  {
    icon: CircleGauge,
    title: "切削顺畅省力",
    text: "锋利钻尖配合螺旋排屑槽，入料快、排屑顺，连续作业更轻松。"
  },
  {
    icon: PackageCheck,
    title: "独立盒装保护",
    text: "透明塑盒包装，便于仓储、运输、门店陈列和电商发货。"
  },
  {
    icon: Boxes,
    title: "多规格可配货",
    text: "支持常用规格组合供货，适合五金门店、批发商和工程采购。"
  }
];

const uses = ["家具连接件预钻孔", "柜体与门板深孔加工", "木工安装现场配套", "门店陈列与电商零售"];

const specs = [
  ["产品名称", "深孔钻"],
  ["适用材质", "木板 / 家具板 / 复合板"],
  ["包装方式", "独立透明塑盒"],
  ["供货模式", "现货批发 / 样品咨询 / 规格组合"],
  ["推荐客户", "五金门店、工具批发、家具安装、工程采购"]
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="深孔钻产品官网首页">
          <span className="brandMark">
            <Wrench size={25} strokeWidth={2.4} />
          </span>
          <span>深孔钻系列</span>
        </a>
        <nav className="navLinks" aria-label="页面导航">
          <a href="#advantages">产品优势</a>
          <a href="#use">应用场景</a>
          <a href="#specs">规格信息</a>
          <a href="#contact">联系咨询</a>
        </nav>
        <a className="navCta" href="#contact">
          <Phone size={18} />
          获取报价
        </a>
      </header>

      <section id="top" className="heroSection">
        <div className="heroCopy">
          <p className="eyebrow">
            <Sparkles size={18} />
            五金工具 · 木工深孔加工
          </p>
          <h1>
            <span className="headlineMain">深孔钻产品</span>
            <span className="headlineAccent">稳定开孔</span>
            <span className="headlineAccent">顺畅排屑</span>
          </h1>
          <p className="heroLead">
            面向家具安装、木工板材、五金门店与批发渠道的深孔钻产品。独立塑盒包装，便于运输收纳，支持多规格配货与长期供货咨询。
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">
              立即咨询报价
              <ArrowRight size={20} />
            </a>
            <a className="secondaryBtn" href="#specs">查看产品参数</a>
          </div>
          <div className="trustStrip" aria-label="产品核心卖点">
            <span>
              <BadgeCheck size={19} />
              盒装现货
            </span>
            <span>
              <ShieldCheck size={19} />
              刃口锋利
            </span>
            <span>
              <Ruler size={19} />
              多规格可选
            </span>
          </div>
        </div>

        <div className="heroVisual">
          <Image
            src="/images/deep-hole-drill-hero.png"
            alt="深孔钻产品主视觉"
            width={1344}
            height={768}
            priority
          />
          <div className="visualNote">
            <strong>Deep Hole Drill</strong>
            <span>适合木工板材与家具安装预钻孔</span>
          </div>
        </div>
      </section>

      <section id="advantages" className="sectionBlock">
        <div className="sectionHeading">
          <p>Product Advantages</p>
          <h2>采购客户关心的点，直接讲清楚</h2>
        </div>
        <div className="advantageGrid">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <article className="advantageCard" key={item.title}>
                <div className="iconBox">
                  <Icon size={27} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="use" className="useSection">
        <div className="useCopy">
          <p className="eyebrow dark">
            <Factory size={18} />
            Application
          </p>
          <h2>适用于木工、家具、五金配货等高频场景</h2>
          <p>
            页面可继续扩展为完整官网：后续加入品牌名、真实规格表、详情图、工厂照片、联系方式，即可用于推广和询盘转化。
          </p>
        </div>
        <div className="useList">
          {uses.map((item, index) => (
            <div className="useItem" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="specs" className="sectionBlock specsBlock">
        <div className="sectionHeading">
          <p>Specifications</p>
          <h2>产品信息</h2>
        </div>
        <div className="specTable">
          {specs.map(([label, value]) => (
            <div className="specRow" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div>
          <p className="eyebrow dark">
            <Phone size={18} />
            Inquiry
          </p>
          <h2>获取深孔钻报价与规格清单</h2>
          <p>
            支持样品咨询、批量采购、门店配货和长期供货合作。把你的电话、微信或邮箱替换到这里，就可以作为官网询盘入口。
          </p>
        </div>
        <div className="contactCard">
          <span>咨询方式</span>
          <strong>电话 / 微信 / 邮箱</strong>
          <p>可替换为真实联系方式与二维码</p>
          <a className="primaryBtn full" href="tel:">
            联系厂家
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
