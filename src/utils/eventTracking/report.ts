type ImageReportParams = {
  img: string;
  params: Record<string, any>;
};

type BeaconReportParams = {
  url: string;
  params: Record<string, any>;
};

type AjaxReportParams = {
  req: string;
  params: Record<string, any>;
};

/* sendBeacon上报 */
export async function sendBeacon({ url = "", params }: BeaconReportParams) {
  if (navigator?.sendBeacon && url) {
    const isSuccess = await navigator?.sendBeacon(url, JSON.stringify(params));
    if (isSuccess) return true;
  }
}

/* img 上报 */
export function sendImg({ img = "", params }: ImageReportParams) {
  return new Promise<boolean>((resolve, reject) => {
    const imageData = ObjectToQueryString(params);
    const img_o = new Image();
    img_o.onload = () => resolve(true);
    img_o.onerror = () => reject(false);
    img_o.src = `${img}?${imageData}`;
  });
}

function ObjectToQueryString(obj: Record<string, any>): string {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(value)
    )
    .join("&");
}

/* ajax 上报 */
export function sendAjax({ req = "", params }: AjaxReportParams) {
  return new Promise<boolean>((resolve, reject) => {
    if (req) {
      postAction(req, params)
        .then(() => resolve(true))
        .catch(() => reject(false));
    } else {
      reject(false);
    }
  });
}
