import styles from "@/template/DashboardPage.module.css"
 function DashboardPage({user}) {
   

    return (
        <div className={styles.container}>
           <h3>سلام  👋🏻 </h3>
           <p>آگهی های خود را اینجا ثبت کنید تا همگان بتوانند آنها را ببینند</p>
           <div className={styles.createdAt}>
            <p>تاریخ عضویت:</p>
            <span>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</span>
           </div>
        </div>
    );
}

export default DashboardPage;