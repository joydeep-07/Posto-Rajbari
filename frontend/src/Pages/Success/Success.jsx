import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEX///9D0pZtuP+9o///tjb/bYM+0ZQ30JEy0JA00JC6nv+9ov8sz45qt//1/fo80ZP/Zn1jtP//tC5N1Jv/siDb9enn+fH1+v/5/vzl+O//8fPN8uH/ztWg5saR4r6C37Zi2KWp6Mzu9v9v26z/lqT/ukLD79udzv963bGX5MGv6s/Q8uP59//cz//Wx//Cqv+Fw///7tb/zoT/+O3/yXX/47r/vlH/pLD/2qL/7NH/9eX/v8j/XXb/2d6u1v+/3v/R5//PvP/JtP/w6v/j2P//xWX/5sH/15z/dor/xWr/0o//i5v/sbv/wcn/zHvg7///1dv/qrbq4/+k0f86LfmVAAALNklEQVR4nO2da1vbOBOGcUhk52A7cUJCgIBNaIBQCC0t0C4tEKDA0pZt+///yyvnaMknydHIfXP5/rJbyBX7YeSZ0WgsraxkZGRkZGRkZGRkZGRkZGRkJOPd+/P8m+ePad8GGGcPDcvK561G/l3atwLDWR7LG9P4lvbNgHA+E4glfk77bgD42JgLzFsf0r4dALwmxEY8S/t+hHNGCMw3ls+hfm4QCq3LtG9IOJTCxvIppEfpEsaLB0KitXyeZuUbES1+pn07EHiMaOWX0ISY86kVrcaSJqYr73HmjWk8LKcFXT4/Pj88/PuXG3Dj4mIj7XuA5alaLaR9D7AUCoXqXgrXPfv4fG69ebiEf4S/VwuFqy3wy9A8NhpusMFu6l/wa71gK8oep5/yjZG6UREkDz173sBGrH4HvgjJpauv8Xz57fIDtqQFXiBwx6lUIz5igY3nsayzDw0JNRDX2fwAvoYH14KeqQj+p/UG+JKuEV+ArzHHre9Ynzw/cCUCl3k2rrARZYV9d+ZMpbHvLfAiCHan1X9gLzHjTYAc+PnlP3iY8kT9daPZXsO0202D81KuvR7pH77D4/Q95xfx8YXVm663e86OrZiqqo1QVRMp9o5z1GS8kqvlwf/jnxY9ckVTYHgQjc2OrWhF00RI8YKQqRbVetc5YrDnuRUYGs4saGfzhBV+ifpAs2+bmkppI3WqGur2Y2x5hvOYwKLcY7BycexhheG5qeHYFTVcnEemqtmdSJEf88Gmco0ImqBeVMOdaa/LJm+CWbH7Ce4AeyBrEQVxbF1VrwJH6bqDihzyxpYsqh1eF+u6IFhf82MvaJAa2xqP+eYaTW2bV2MaZXPjUFUTyBtjqod8Gp8t4JDox0FmYn0jjWaH53I/LclrkJt17uePBqn1TfYLSlZoHFQW1TfSWDlgHqrvGo1P8Z8SRQ8lfwBJTNSTd9vs7Agx4BhU2Ulbjo92fTEPQ2PW22lLIulp4gw4Bql/1Uh1BI7QmcQKV9yAZUcTrs9F+2sexm4RRKCiFLtpSxuxbov1MV5MO/rau9dfv960/o8FKooaJbF1WhuxD6sRVGCkxFddz42o5XYBBXZhBeKBehBy5VZtIjCX03NwVtwRlaiFo20HX3p/JhBbcR9KYAcmTJBUnKBL79ZyHmpARuxVJAjEEoOmU9ekwhsQgW0ZFlTcBC6gEvdVJxRegyisi0/VQiTW01F4AO9lpqh+b3MDP0olPYRjKkf05VvgnsZIVDFMClLW6RvwRgsdIlocQId6EtM3z2jp84ivA5hQ6hh18Y/TXb0GmLWtS/OjUwL8aWsfMPM+lOdHp2gBSzetm+trmNlTU77AIGcDiISE248qsW7TlJSukSCVe/UtMTtyI8UUeUY0ZEeKCUiVpTAFRzpGTbISnoD1VJ5Cl6A5BgQ9qPJoPBrH0iILGz9+fQ9YqO9CpTNILcak86FlqWT6Xq6qmKsL6udNID+DKt1+r9+NXgGpsDaKMbB1VRhTLZCdXQ6Mn0HK2ujrNyNaqLCvCaxKJeLLVCDmifiNDTJIzfo0nK9FOTJkC1P4NBdYqP7y/AImn1HtedK5HZVPCBum/3lMiCV6ftOHGKSqd5HpKOpvKCwkXlQJhf/NfwPhScmFwkhXhkQtuL0UCIXz/jwj0hEko3JIXDv6QVQEpd+hCiOHUEKBlH/sROb1mq+akYw9cpTO474jelqBKlRHQswoMQXFiy1S4Twiin4MkUrZxIiJRsIeRELgvCN/XRGrEKE18rrNuL4cYdn3j6tAEwou0Jh1KrytxTuyoGWaRPyaSfR2qx8JnVeoNuUYjxj+gEVBrgZbEafdBZx5P3nT0uh4j0ZvUrALpB+pHkvjkchp8NbFy94vspE7MqNSlcO+c8AcTop0od5hmrWYIavegohypdq4UNRmLIdX6DtlXDIX5kyDibj74nT0GEz+VqMLZ6ytY8CljAhXN79wk+E2NbrzsMvspRGkQCP8Nrwd6M04f4NUquDC01kFWhiOCIdEO+hadLspMuk4r3Akg8ICYhDtCBsS+eJm1EPlj/M8MUZRIbuHI/pLqPpCL/yTpk0tIh3xLZhr1AAQStTUjapl9sOCmz/Oc3ZQp6YQKeToCZHoa/x1eFvEU1OIJZKPlxP0Ye2Q+soOd/k1PYU4FpMP2Lb/0xU6qQz4TKoKI3ypi0lJ9KUp9Hx+5SDBXAXUl8ZND+m+bLIxDNFNhsk6qEHjYUROM5FIOUpvC7FvPm8ke88GdrE79pZUanXInv1NfHG+nawigkDzUoaGS2rWNxuIZpL5fCCwcwuGZRmqL3vSPeVLZBK/KQU8P4yc40+gKryj6WKRXtoMTXliAZ7jMy0eUkEPTxx8/fb8cX4GcLtC5JxhLpEMe+0uPZ9PEOdniCrrh8BYL/XN4EmSxPkZoOEQw+bhfXN4L+v2ImVl8I4TxnUL33LEnNi6fcw3Q7+xF7305ZUYkh8njPMzBPYqBMO8fhj4GgienSy68AE6s3DhWQMOyB83F31hWNgacDjsC4j0dBHTX/iVb/DHkKsXw5epLRDnp0hoT+Tpp6Gmi4vE+SkacDR04emJIuZSC8X5CQJ7osLh6lWYz6UWi/NTwGOFC19v4rR4mHA+TyOyNzEcvnaMcfkwdq2GDQme1IWzR1hzmBoQ2L5L0m4gnHmXau8IEghcopnT4fQZC26ONYdvl6wFMNJq1q9Ie2lmO50XLgLeBoYitjAMpFBKqBhzmMaLT8BFNhKIPto4EJL36hqmL/+9GZmvH7rUZQuU9c7TjCPp73ILfuUpHtnv49PLAm+Ph+XS4OQtnEJDTC7NCDIpN3NcKpVXV8vl0gmcRLn7YlAp921pdUJpCCdR4tvA9J4RxzOBWCKgFVPbn+atRyCWCPcstiVtb4Lo7otjQmEZ0IibkvaJoue9wzKhcACnkLEze0F83cQrZVLhKmDIWNmGz97o7g5X4ao8hRL23AsoPg3kjdKVdPZNpDzNLaxCMZVeLoF0tLiDVQhqxbD9S0+8ER/YhC7sLxJw4msnnjGcZ23AT+GYFPYRPimVx5m3BAu6dOTvBX13OyiXB7fgz+CUnvAEDhVjK/hvQeMgzdLvyY4RczDCmNT31b8LHP09U9j6hJnyjvP3peBZpyHmeASe8y2AwGlhSB4h5oyS9I8MwGlhaLbrKIuFfxN1vC0q0PuthzHAqcTvkN8ZHTX540ifFXStn0JuRh7Ob2zE8BKXcSjqvKdWLqf/gRYTzDC6/mM4Cnd7F9L8Z3bt1nL6V1AhodyH+pop3OeudQP8yytWCLONdQB3t24iPzy5v3Ntdxyr0D0asMs0WhFSKyFn58lUeF8aFQ5wLl9aHQzcKgJLlRKLNDX6bEdSnamhrhOWoMkcpaWRvASlA/cMSxR8hqVZ1JRuJ+oMS+xpcqdiBMRxhxUObocDbMIyFopNOeSIVEa75xzYdaRODiLF/0V1e8fpteN2lT2FOxOAAissH4/+5/fx7XA4PAmLhpFMzpJdYz9L9romLVy4A1TqbGyCu5f1q5QrYecJXbQLZHTGg5S0xq3fAa7xhHPqbrwuxYp4xpTKMG2NdpWXEhTv5RV9CF5H+8qnlID7aF1j9376R+zd7ObwQNUlBY0Yrms1Xc/pek1wHrJfAztIho8/szM1RB9O9IqHqdhvTIT38B7RVlyRExOjaZEn2/wlnkEk1PlLKU1cIdknbKj/Dc+NYE5Jhbm070c8y6/wz9KPUuoMLWkFJInkvEaEOIApdbxGXEoTuhFxasVljIYjbnSceePEW79J+07guNk/Pd2/SfsuMjIyMjIyMjIyMjIyMjIyMjIyMjIygvgftIn3FjXnXk4AAAAASUVORK5CYII=" alt="success" />
          <h2>Reservation Successful!</h2>
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;