(function(){
    var loadHandler = window['sl_{5994786E-3D97-428B-8A74-79989695AB95}'];
    if (loadHandler) {
        // Function to get real-time date and time
        function getRealTime() {
            const now = new Date();
            const time = now.toLocaleTimeString(); // Lấy thời gian
            const date = now.toLocaleDateString(); // Lấy ngày
            return { time, date };
        }

        // Lấy thời gian và ngày hiện tại
        const { time, date } = getRealTime();

        // Gắn nội dung vào HTML
        loadHandler(15, `
            <div id="spr0_13669792">
                <div id="spr1_13669792" class="kern slide">
                    <img id="img1_13669792" src="data/img2.png" width="960px" height="540px" alt="" style="left:0px;top:0px;"/>
                    <div id="svg3_13669792" style="left:149.2px;top:169.339px;">
                        <svg width="695" height="4" viewBox="-2 -1 695 4">
                            <g fill="#808080" stroke="none">
                                <path stroke="#808080" stroke-width="2" stroke-linecap="butt" transform="translate(-151.200012,-170.339294)" d="M151.2,171.339 H841.796"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div id="spr2_13669792" class="kern slide">
                    <div id="spr3_13669792" style="left:151.2px;top:34.82px;">
                        <div style="width:0px;">
                            <span id="txt0_13669792" data-width="613.796875" style="left:37.923px;top:58.296px;">Chúc mừng em đã hoàn thành bài ôn tập</span>
                        </div>
                    </div>
                    <div id="spr4_13669792" style="left:151.2px;top:182.069px;">
                        <div style="width:0px;">
                            <span id="txt1_13669792" data-width="165.531250" style="left:261.798px;top:19.765px;">${time}</span>
                        </div>
                        <div style="width:0px;">
                            <span id="txt2_13669792" data-width="159.281250" style="left:264.923px;top:78.145px;">${date}</span>
                        </div>
                    </div>
                    <div id="spr5_13669792" aria-label="Take A Screenshot - Outline - Wired - Lordicon" role="group" style="left:224.604px;top:308.789px;">
                        <div id="spr6_13669792">
                            <img id="img0_13669792" src="data/img23.gif" width="160.8" height="160.8" alt=""/>
                        </div>
                    </div>
                    <div id="spr7_13669792" style="left:376px;top:336.226px;">
                        <div style="width:0px;">
                            <span id="txt3_13669792" data-width="344.812500" style="left:32.761px;top:15.951px;">Chụp lại màn hình này</span>
                        </div>
                        <div style="width:0px;">
                            <span id="txt4_13669792" data-width="317.968750" style="left:46.011px;top:59.016px;">và gửi lên nhóm Zalo</span>
                        </div>
                    </div>
                </div>
            </div>
        `, '{"s":[]}');
    }
})();
